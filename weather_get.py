import pyowm
owm = pyowm.OWM('187d93ba0d7ccd21dbbe4ab04b1e9f72')
#get forecast for New York and LA
def get_w(flight_date, origin, dest):
    origin_owm = origin+',us'
    dest_owm = dest+',us'
    fc_o = owm.three_hours_forecast(origin_owm)
    fc_d = owm.three_hours_forecast(dest_owm)
    str_date = str(flight_date)+'+00'
    w_o = fc_o.get_weather_at(str_date)
    w_d = fc_d.get_weather_at(str_date)

    o_forecast=[]
    o_forecast.append(w_o.get_temperature(unit='celsius')['temp']*10)
    o_forecast.append(w_o.get_pressure()['sea_level']*10)
    o_forecast.append(w_o.get_wind()['deg'])
    o_forecast.append(w_o.get_wind()['speed']*10)
    o_forecast.append(w_o.get_clouds()/10)
    o_forecast.append(w_o.get_rain().get('3h', 0)*10)

    d_forecast=[]
    d_forecast.append(w_d.get_temperature(unit='celsius')['temp']*10)
    d_forecast.append(w_d.get_pressure()['sea_level']*10)
    d_forecast.append(w_d.get_wind()['deg'])
    d_forecast.append(w_d.get_wind()['speed']*10)
    d_forecast.append(w_d.get_clouds()/10)
    d_forecast.append(w_d.get_rain().get('3h', 0)*10)

    return list(o_forecast+d_forecast)
