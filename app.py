from __future__ import print_function  # In python 2.7
from flask import Flask, render_template, request, redirect
import requests
import numpy as np
import pandas as pd
from weather_get import get_w
import cPickle as pickle
from datetime import datetime, timedelta
import dill
import sys
from sklearn.preprocessing import OneHotEncoder as OHE
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder
from sklearn.pipeline import Pipeline
from sklearn import base
from sklearn.externals import joblib
from sklearn_pandas import DataFrameMapper

# # app Flask
# -----------------------------------------------------|
app = Flask(__name__)
app.vars = {}
# LOAD data and clf/lb

# union = joblib.load('union_test.pkl')
lb_a = pickle.load(open('airport_encoder_0829.p', 'rb'))
lb_c = pickle.load(open('carriers_encoder_0829.p', 'rb'))
mapper = pickle.load(open('mapper_0829.p', 'rb'))
clf = pickle.load(open('logistic_0829.p', 'rb'))
dist_dict = pickle.load(open('distances.p', 'rb'))
city_dict = pickle.load(open('city.p', 'rb '))
taxi_in_dict = pickle.load(open('taxi_in.p', 'rb'))
taxi_out_dict = pickle.load(open('taxi_out.p', 'rb'))
airp_d = list(city_dict.keys())
airp_d.sort()
# make df for sample
cols = ['Month', 'DayofMonth', 'DayOfWeek', 'UniqueCarrier', 'Origin', 'Dest',
        'DepTime', 'Distance', 'TaxiOut_mean', 'TaxiIn_mean', 'o_temp',
        'o_press', 'o_wind_d', 'o_wind_s', 'o_coverage', 'o_rain_1h',
        'd_temp', 'd_press', 'd_wind_d', 'd_wind_s', 'd_coverage',
        'd_rain_1h']
carrier = ['AA', 'UA', 'AS', 'WN', 'OO', 'EV', 'HA', 'VX', 'DL', 'NK', 'B6', 'F9']
sample = pd.DataFrame(index=np.arange(1), columns=cols)

# datetime + 3 days
date_time = datetime.now() + timedelta(days=3)
date_time_limit = datetime.now() + timedelta(days=5)
dt_string = date_time.strftime('%Y-%m-%d %H:%M:%S')
dt_string_limit = date_time_limit.strftime('%Y-%m-%d %H:%M:%S')

app.add_url_rule('/assets/<path:filename>', endpoint='assets', view_func=app.send_static_file)

# print(city_dict.keys(), file=sys.stderr)

@app.route('/')
def main():
    if request.method == 'GET':
        return render_template('index.html')

@app.route('/prediction', methods=['GET', 'POST'])
def get_dat():
    if request.method == 'POST':
        result = request.form
        origin = result['origin']
        dest = result['dest']
        origin_city = city_dict[origin]
        dest_city = city_dict[dest]
        unique_carrier = result['unique_carrier']
        date_flight = str(result['date'])
        list_weath = get_w(date_flight, origin_city, dest_city)
        date_time = datetime.strptime(date_flight, '%Y-%m-%d  %H:%M:%S')
        sample.Month = date_time.month
        sample.DayofMonth = date_time.day
        sample.DayOfWeek = int(date_time.weekday())
        sample.Origin = str(origin)
        sample.Dest = str(dest)
        time_a = str(date_time.time())
        time_b = int(time_a[:2] + time_a[3:5])
        sample.DepTime = time_b
        # get distance
        d_tup = tuple(sorted([str(dest), str(origin)]))
        sample.Distance = dist_dict[d_tup]
        # get taxing in/out mean
        tax_o = tuple((date_time.month, str(origin)))
        tax_i = tuple((date_time.month, str(dest)))
        sample.TaxiOut_mean = taxi_out_dict[tax_o]
        sample.TaxiIn_mean = taxi_in_dict[tax_i]
        sample.UniqueCarrier = unique_carrier
        # add weather data in
        for i, v in enumerate(list_weath):
            sample.iloc[0, 10 + i] = list_weath[i]
        # print(sample, file=sys.stderr)
        # transform data
        sample.Origin = lb_a.transform(sample.Origin)
        sample.Dest = lb_a.transform(sample.Dest)
        sample.UniqueCarrier = lb_c.transform(sample.UniqueCarrier)
        sample_tr = mapper.transform(sample)
        pred = clf.predict_proba(sample_tr)
        class_pred = np.argmax(pred)
        return render_template('prediction.html', pred=class_pred, proba=pred, dt_string=date_flight, dt_string_limit=dt_string_limit, show_prediction=True, airports_o=city_dict.keys(), airports_d=airp_d, origin=result['origin'], dest=result['dest'], carriers=carrier, carrier=result['unique_carrier'])
    else:
        return render_template('prediction.html', dt_string=dt_string, dt_string_limit=dt_string_limit, show_prediction=False, airports_o=city_dict.keys(), airports_d=airp_d, carriers=carrier)


if __name__ == '__main__':
  app.run(port=33507, debug=True)
