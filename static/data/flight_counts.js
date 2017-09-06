var flights = [
    {
        "Dest": "CLT", 
        "Origin": "ATL", 
        "Counts": 2973, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ATL", 
        "Counts": 2783, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ATL", 
        "Counts": 1030, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ATL", 
        "Counts": 444, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ATL", 
        "Counts": 1196, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 844, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ATL", 
        "Counts": 1855, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ATL", 
        "Counts": 806, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "AUS", 
        "Counts": 933, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "AUS", 
        "Counts": 4353, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "AUS", 
        "Counts": 1354, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "AUS", 
        "Counts": 335, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "AUS", 
        "Counts": 1195, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "AUS", 
        "Counts": 418, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "AUS", 
        "Counts": 368, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BNA", 
        "Counts": 1632, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BNA", 
        "Counts": 2737, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BNA", 
        "Counts": 773, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "BNA", 
        "Counts": 99, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BNA", 
        "Counts": 2, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BOS", 
        "Counts": 3196, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "BOS", 
        "Counts": 4935, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BOS", 
        "Counts": 2526, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "BOS", 
        "Counts": 1334, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BOS", 
        "Counts": 1603, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BOS", 
        "Counts": 3810, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "BOS", 
        "Counts": 2511, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BOS", 
        "Counts": 3182, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BOS", 
        "Counts": 3771, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BOS", 
        "Counts": 1174, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BOS", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BWI", 
        "Counts": 2679, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BWI", 
        "Counts": 1290, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "BWI", 
        "Counts": 957, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BWI", 
        "Counts": 27, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BWI", 
        "Counts": 2, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BWI", 
        "Counts": 802, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "CLE", 
        "Counts": 1045, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "CLE", 
        "Counts": 1242, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLE", 
        "Counts": 43, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLE", 
        "Counts": 94, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLT", 
        "Counts": 2972, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "CLT", 
        "Counts": 933, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "CLT", 
        "Counts": 1634, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLT", 
        "Counts": 3197, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "CLT", 
        "Counts": 2680, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "CLT", 
        "Counts": 1046, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "CLT", 
        "Counts": 2841, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLT", 
        "Counts": 1905, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "CLT", 
        "Counts": 4075, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLT", 
        "Counts": 1679, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLT", 
        "Counts": 3232, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "CLT", 
        "Counts": 2616, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLT", 
        "Counts": 2529, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "CLT", 
        "Counts": 2097, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLT", 
        "Counts": 1722, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "CLT", 
        "Counts": 2140, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLT", 
        "Counts": 3494, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "CLT", 
        "Counts": 1324, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLT", 
        "Counts": 3233, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "CLT", 
        "Counts": 3047, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLT", 
        "Counts": 1355, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "CLT", 
        "Counts": 1639, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLT", 
        "Counts": 3210, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "CLT", 
        "Counts": 318, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLT", 
        "Counts": 3399, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLT", 
        "Counts": 3100, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "CLT", 
        "Counts": 2431, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "CLT", 
        "Counts": 2690, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLT", 
        "Counts": 1786, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "CLT", 
        "Counts": 808, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "CLT", 
        "Counts": 715, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "CLT", 
        "Counts": 916, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "CLT", 
        "Counts": 1978, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "CLT", 
        "Counts": 82, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "CLT", 
        "Counts": 351, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "CLT", 
        "Counts": 288, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "CLT", 
        "Counts": 1308, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "CLT", 
        "Counts": 3127, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DCA", 
        "Counts": 4927, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DCA", 
        "Counts": 2912, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DCA", 
        "Counts": 3207, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DCA", 
        "Counts": 934, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DCA", 
        "Counts": 368, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DCA", 
        "Counts": 359, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DCA", 
        "Counts": 729, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DCA", 
        "Counts": 4013, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DCA", 
        "Counts": 33, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DCA", 
        "Counts": 1844, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DCA", 
        "Counts": 3290, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DCA", 
        "Counts": 44, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DCA", 
        "Counts": 2687, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DCA", 
        "Counts": 268, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DCA", 
        "Counts": 1079, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DCA", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DCA", 
        "Counts": 75, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DCA", 
        "Counts": 1335, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DEN", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DEN", 
        "Counts": 1905, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DEN", 
        "Counts": 3453, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DEN", 
        "Counts": 867, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DEN", 
        "Counts": 1520, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DEN", 
        "Counts": 900, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 1842, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DFW", 
        "Counts": 2783, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DFW", 
        "Counts": 4355, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DFW", 
        "Counts": 2735, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DFW", 
        "Counts": 2431, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DFW", 
        "Counts": 1287, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DFW", 
        "Counts": 1241, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DFW", 
        "Counts": 4077, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DFW", 
        "Counts": 3194, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DFW", 
        "Counts": 3452, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DFW", 
        "Counts": 1915, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DFW", 
        "Counts": 1808, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DFW", 
        "Counts": 1978, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "DFW", 
        "Counts": 748, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DFW", 
        "Counts": 90, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DFW", 
        "Counts": 1267, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DFW", 
        "Counts": 2170, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DFW", 
        "Counts": 493, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DFW", 
        "Counts": 3578, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DFW", 
        "Counts": 5431, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DFW", 
        "Counts": 4064, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DFW", 
        "Counts": 2468, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DFW", 
        "Counts": 3391, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DFW", 
        "Counts": 4128, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DFW", 
        "Counts": 2090, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DFW", 
        "Counts": 2366, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DFW", 
        "Counts": 5352, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DFW", 
        "Counts": 1471, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DFW", 
        "Counts": 3225, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DFW", 
        "Counts": 4115, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DFW", 
        "Counts": 1385, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DFW", 
        "Counts": 1797, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DFW", 
        "Counts": 945, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DFW", 
        "Counts": 3222, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DFW", 
        "Counts": 4413, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DFW", 
        "Counts": 2890, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DFW", 
        "Counts": 3545, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DFW", 
        "Counts": 1698, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DFW", 
        "Counts": 2031, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DFW", 
        "Counts": 1483, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DFW", 
        "Counts": 3024, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DFW", 
        "Counts": 2712, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DFW", 
        "Counts": 2340, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DTW", 
        "Counts": 1679, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DTW", 
        "Counts": 1916, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DTW", 
        "Counts": 475, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DTW", 
        "Counts": 872, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DTW", 
        "Counts": 297, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DTW", 
        "Counts": 1126, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "EWR", 
        "Counts": 3232, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "EWR", 
        "Counts": 1810, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "EWR", 
        "Counts": 1409, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "EWR", 
        "Counts": 898, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "EWR", 
        "Counts": 1082, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "FLL", 
        "Counts": 2616, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "FLL", 
        "Counts": 935, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "FLL", 
        "Counts": 1978, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "FLL", 
        "Counts": 959, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "FLL", 
        "Counts": 1544, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "FLL", 
        "Counts": 244, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "HNL", 
        "Counts": 748, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HNL", 
        "Counts": 1447, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "HNL", 
        "Counts": 842, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "HOU", 
        "Counts": 90, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAD", 
        "Counts": 1266, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAD", 
        "Counts": 729, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "IAD", 
        "Counts": 665, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAH", 
        "Counts": 2531, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAH", 
        "Counts": 2173, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "IAH", 
        "Counts": 1814, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAH", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "IAH", 
        "Counts": 331, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAH", 
        "Counts": 1141, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "JFK", 
        "Counts": 366, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "JFK", 
        "Counts": 1334, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "JFK", 
        "Counts": 2099, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "JFK", 
        "Counts": 367, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "JFK", 
        "Counts": 492, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "JFK", 
        "Counts": 786, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "JFK", 
        "Counts": 4200, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "JFK", 
        "Counts": 725, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "JFK", 
        "Counts": 2474, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "JFK", 
        "Counts": 571, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "JFK", 
        "Counts": 1395, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "JFK", 
        "Counts": 471, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "JFK", 
        "Counts": 443, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "JFK", 
        "Counts": 1861, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LAS", 
        "Counts": 1720, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LAS", 
        "Counts": 357, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAS", 
        "Counts": 3577, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAS", 
        "Counts": 786, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 2490, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LAS", 
        "Counts": 1350, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAS", 
        "Counts": 1669, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAS", 
        "Counts": 1471, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAS", 
        "Counts": 2083, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAX", 
        "Counts": 1029, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAX", 
        "Counts": 1356, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAX", 
        "Counts": 774, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAX", 
        "Counts": 1604, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LAX", 
        "Counts": 2139, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LAX", 
        "Counts": 729, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAX", 
        "Counts": 5432, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAX", 
        "Counts": 1447, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAX", 
        "Counts": 729, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAX", 
        "Counts": 4200, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 2491, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAX", 
        "Counts": 82, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAX", 
        "Counts": 818, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LAX", 
        "Counts": 2884, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAX", 
        "Counts": 410, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAX", 
        "Counts": 213, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAX", 
        "Counts": 3344, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAX", 
        "Counts": 2014, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 2202, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LAX", 
        "Counts": 280, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LAX", 
        "Counts": 370, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 465, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 2057, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LAX", 
        "Counts": 770, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LAX", 
        "Counts": 118, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LGA", 
        "Counts": 444, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LGA", 
        "Counts": 3815, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LGA", 
        "Counts": 3547, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LGA", 
        "Counts": 4005, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LGA", 
        "Counts": 4065, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LGA", 
        "Counts": 382, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LGA", 
        "Counts": 3953, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LGA", 
        "Counts": 7, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LGA", 
        "Counts": 4884, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LGA", 
        "Counts": 862, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LGA", 
        "Counts": 11, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LGA", 
        "Counts": 183, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MCI", 
        "Counts": 1324, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCI", 
        "Counts": 34, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MCI", 
        "Counts": 2467, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCI", 
        "Counts": 82, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MCI", 
        "Counts": 200, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCI", 
        "Counts": 397, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCI", 
        "Counts": 261, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MCI", 
        "Counts": 1096, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MCO", 
        "Counts": 3235, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCO", 
        "Counts": 1846, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MCO", 
        "Counts": 3363, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MCO", 
        "Counts": 725, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCO", 
        "Counts": 817, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCO", 
        "Counts": 381, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MCO", 
        "Counts": 3206, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCO", 
        "Counts": 1844, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCO", 
        "Counts": 2739, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MCO", 
        "Counts": 912, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MIA", 
        "Counts": 1200, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MIA", 
        "Counts": 333, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MIA", 
        "Counts": 99, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MIA", 
        "Counts": 2513, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MIA", 
        "Counts": 957, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MIA", 
        "Counts": 3046, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MIA", 
        "Counts": 3290, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MIA", 
        "Counts": 867, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MIA", 
        "Counts": 4071, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MIA", 
        "Counts": 476, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MIA", 
        "Counts": 1411, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MIA", 
        "Counts": 665, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MIA", 
        "Counts": 1817, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MIA", 
        "Counts": 2473, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MIA", 
        "Counts": 1348, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MIA", 
        "Counts": 2884, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MIA", 
        "Counts": 4006, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MIA", 
        "Counts": 199, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MIA", 
        "Counts": 3207, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MIA", 
        "Counts": 356, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MIA", 
        "Counts": 769, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MIA", 
        "Counts": 3365, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MIA", 
        "Counts": 2434, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MIA", 
        "Counts": 774, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MIA", 
        "Counts": 1067, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MIA", 
        "Counts": 448, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MIA", 
        "Counts": 314, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MIA", 
        "Counts": 370, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MIA", 
        "Counts": 1261, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MIA", 
        "Counts": 146, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MIA", 
        "Counts": 625, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MIA", 
        "Counts": 2065, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSP", 
        "Counts": 1355, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSP", 
        "Counts": 2091, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSP", 
        "Counts": 410, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSP", 
        "Counts": 7, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MSP", 
        "Counts": 356, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 2121, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSP", 
        "Counts": 894, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSP", 
        "Counts": 1494, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSY", 
        "Counts": 1589, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MSY", 
        "Counts": 95, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSY", 
        "Counts": 2366, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSY", 
        "Counts": 213, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MSY", 
        "Counts": 770, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSY", 
        "Counts": 569, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "OAK", 
        "Counts": 823, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 841, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ORD", 
        "Counts": 1193, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ORD", 
        "Counts": 3271, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ORD", 
        "Counts": 27, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ORD", 
        "Counts": 3210, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ORD", 
        "Counts": 2700, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ORD", 
        "Counts": 1519, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ORD", 
        "Counts": 5309, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ORD", 
        "Counts": 872, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ORD", 
        "Counts": 899, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ORD", 
        "Counts": 956, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ORD", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "ORD", 
        "Counts": 570, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ORD", 
        "Counts": 1669, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ORD", 
        "Counts": 3343, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ORD", 
        "Counts": 4831, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ORD", 
        "Counts": 396, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ORD", 
        "Counts": 1813, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ORD", 
        "Counts": 3367, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 2122, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ORD", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ORD", 
        "Counts": 651, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 3026, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ORD", 
        "Counts": 3194, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ORD", 
        "Counts": 30, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ORD", 
        "Counts": 1343, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ORD", 
        "Counts": 1002, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ORD", 
        "Counts": 1496, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ORD", 
        "Counts": 60, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ORD", 
        "Counts": 1657, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ORD", 
        "Counts": 2178, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "ORD", 
        "Counts": 701, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ORD", 
        "Counts": 243, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "ORD", 
        "Counts": 291, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "ORD", 
        "Counts": 1326, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ORD", 
        "Counts": 1574, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ORD", 
        "Counts": 1078, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PDX", 
        "Counts": 315, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PDX", 
        "Counts": 1470, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PDX", 
        "Counts": 651, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PDX", 
        "Counts": 83, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PDX", 
        "Counts": 1493, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHL", 
        "Counts": 1856, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PHL", 
        "Counts": 419, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHL", 
        "Counts": 2, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PHL", 
        "Counts": 3776, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PHL", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHL", 
        "Counts": 42, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PHL", 
        "Counts": 3044, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PHL", 
        "Counts": 284, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHL", 
        "Counts": 901, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PHL", 
        "Counts": 3223, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHL", 
        "Counts": 297, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHL", 
        "Counts": 1544, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHL", 
        "Counts": 330, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHL", 
        "Counts": 1468, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHL", 
        "Counts": 2012, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "PHL", 
        "Counts": 909, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PHL", 
        "Counts": 261, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHL", 
        "Counts": 2739, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "PHL", 
        "Counts": 2438, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHL", 
        "Counts": 894, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "PHL", 
        "Counts": 569, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 3026, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHL", 
        "Counts": 82, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PHL", 
        "Counts": 2224, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "PHL", 
        "Counts": 842, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "PHL", 
        "Counts": 1147, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "PHL", 
        "Counts": 944, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PHL", 
        "Counts": 921, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHL", 
        "Counts": 649, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHL", 
        "Counts": 1552, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHL", 
        "Counts": 187, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHL", 
        "Counts": 120, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHL", 
        "Counts": 1579, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHX", 
        "Counts": 806, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PHX", 
        "Counts": 368, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PHX", 
        "Counts": 1177, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PHX", 
        "Counts": 802, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHX", 
        "Counts": 95, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PHX", 
        "Counts": 3101, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PHX", 
        "Counts": 1079, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 1844, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PHX", 
        "Counts": 4104, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHX", 
        "Counts": 1126, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PHX", 
        "Counts": 1081, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHX", 
        "Counts": 244, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PHX", 
        "Counts": 842, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHX", 
        "Counts": 1143, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PHX", 
        "Counts": 1396, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHX", 
        "Counts": 2083, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 2205, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PHX", 
        "Counts": 1098, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHX", 
        "Counts": 913, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "PHX", 
        "Counts": 774, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHX", 
        "Counts": 1496, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "PHX", 
        "Counts": 823, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHX", 
        "Counts": 3191, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHX", 
        "Counts": 1491, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PHX", 
        "Counts": 2223, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "PHX", 
        "Counts": 695, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PHX", 
        "Counts": 1876, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "PHX", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 1752, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHX", 
        "Counts": 1780, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PHX", 
        "Counts": 1748, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHX", 
        "Counts": 1479, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "PHX", 
        "Counts": 1839, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "PHX", 
        "Counts": 1783, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHX", 
        "Counts": 1124, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHX", 
        "Counts": 607, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PIT", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PIT", 
        "Counts": 2356, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PIT", 
        "Counts": 2, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PIT", 
        "Counts": 1383, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PIT", 
        "Counts": 278, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "PIT", 
        "Counts": 12, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PIT", 
        "Counts": 30, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PIT", 
        "Counts": 917, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PIT", 
        "Counts": 697, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "RDU", 
        "Counts": 2688, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "RDU", 
        "Counts": 1797, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "RDU", 
        "Counts": 371, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RDU", 
        "Counts": 183, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "RDU", 
        "Counts": 1067, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RDU", 
        "Counts": 1341, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "RDU", 
        "Counts": 1149, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "RSW", 
        "Counts": 1786, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "RSW", 
        "Counts": 76, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "RSW", 
        "Counts": 946, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RSW", 
        "Counts": 1003, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "RSW", 
        "Counts": 945, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SAN", 
        "Counts": 808, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SAN", 
        "Counts": 3222, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SAN", 
        "Counts": 471, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SAN", 
        "Counts": 448, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAN", 
        "Counts": 1497, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SAN", 
        "Counts": 922, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAN", 
        "Counts": 1876, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SAT", 
        "Counts": 715, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SAT", 
        "Counts": 4412, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SAT", 
        "Counts": 315, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAT", 
        "Counts": 60, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAT", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SEA", 
        "Counts": 916, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SEA", 
        "Counts": 2889, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SEA", 
        "Counts": 444, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 466, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SEA", 
        "Counts": 369, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SEA", 
        "Counts": 1655, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SEA", 
        "Counts": 649, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 1754, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SFO", 
        "Counts": 1980, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 1, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SFO", 
        "Counts": 3547, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SFO", 
        "Counts": 1860, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 2056, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SFO", 
        "Counts": 1263, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SFO", 
        "Counts": 2180, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SFO", 
        "Counts": 1549, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SFO", 
        "Counts": 1781, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SJC", 
        "Counts": 83, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SJC", 
        "Counts": 1696, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SJC", 
        "Counts": 703, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SJC", 
        "Counts": 1747, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SLC", 
        "Counts": 350, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SLC", 
        "Counts": 2031, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SLC", 
        "Counts": 146, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SLC", 
        "Counts": 242, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SLC", 
        "Counts": 187, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SLC", 
        "Counts": 1480, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SMF", 
        "Counts": 287, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SMF", 
        "Counts": 1483, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SMF", 
        "Counts": 290, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SMF", 
        "Counts": 1839, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SNA", 
        "Counts": 3026, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SNA", 
        "Counts": 1330, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SNA", 
        "Counts": 1781, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "STL", 
        "Counts": 1308, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "STL", 
        "Counts": 2716, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "STL", 
        "Counts": 770, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "STL", 
        "Counts": 625, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "STL", 
        "Counts": 1570, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "STL", 
        "Counts": 120, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "STL", 
        "Counts": 1126, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "TPA", 
        "Counts": 3180, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "TPA", 
        "Counts": 1336, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "TPA", 
        "Counts": 2339, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "TPA", 
        "Counts": 119, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "TPA", 
        "Counts": 2064, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "TPA", 
        "Counts": 1079, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "TPA", 
        "Counts": 1525, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "TPA", 
        "Counts": 607, 
        "UniqueCarrier": "AA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ATL", 
        "Counts": 84, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ATL", 
        "Counts": 685, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "AUS", 
        "Counts": 560, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BNA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "BOS", 
        "Counts": 362, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BOS", 
        "Counts": 902, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BWI", 
        "Counts": 333, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DCA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DCA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DCA", 
        "Counts": 732, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 1672, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DFW", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DFW", 
        "Counts": 1071, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DTW", 
        "Counts": 426, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "EWR", 
        "Counts": 52, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "EWR", 
        "Counts": 41, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "EWR", 
        "Counts": 727, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "FLL", 
        "Counts": 374, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "HNL", 
        "Counts": 205, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "HNL", 
        "Counts": 394, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "HNL", 
        "Counts": 331, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "HNL", 
        "Counts": 789, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "HNL", 
        "Counts": 243, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "IAD", 
        "Counts": 365, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "IAH", 
        "Counts": 551, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "JFK", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAS", 
        "Counts": 1046, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAS", 
        "Counts": 3190, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAX", 
        "Counts": 333, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAX", 
        "Counts": 2458, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 4822, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MCI", 
        "Counts": 586, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MCO", 
        "Counts": 262, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MCO", 
        "Counts": 551, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MSP", 
        "Counts": 776, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MSY", 
        "Counts": 376, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "OAK", 
        "Counts": 204, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "OAK", 
        "Counts": 1088, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ORD", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ORD", 
        "Counts": 1339, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PDX", 
        "Counts": 83, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PDX", 
        "Counts": 362, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PDX", 
        "Counts": 52, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PDX", 
        "Counts": 394, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PDX", 
        "Counts": 1045, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PDX", 
        "Counts": 2459, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PDX", 
        "Counts": 490, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PDX", 
        "Counts": 1145, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PDX", 
        "Counts": 363, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PDX", 
        "Counts": 1707, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PDX", 
        "Counts": 1242, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "PDX", 
        "Counts": 1014, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHL", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHX", 
        "Counts": 491, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 1889, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "RDU", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SAN", 
        "Counts": 41, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SAN", 
        "Counts": 331, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SAN", 
        "Counts": 262, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SAN", 
        "Counts": 1145, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAN", 
        "Counts": 2379, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAN", 
        "Counts": 342, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAT", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SEA", 
        "Counts": 685, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SEA", 
        "Counts": 560, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SEA", 
        "Counts": 902, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SEA", 
        "Counts": 732, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 1672, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SEA", 
        "Counts": 1071, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SEA", 
        "Counts": 426, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SEA", 
        "Counts": 727, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SEA", 
        "Counts": 374, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SEA", 
        "Counts": 788, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SEA", 
        "Counts": 365, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SEA", 
        "Counts": 551, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SEA", 
        "Counts": 3190, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 4820, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SEA", 
        "Counts": 586, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SEA", 
        "Counts": 552, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SEA", 
        "Counts": 775, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SEA", 
        "Counts": 376, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SEA", 
        "Counts": 1086, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SEA", 
        "Counts": 1339, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SEA", 
        "Counts": 364, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 1890, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SEA", 
        "Counts": 2380, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SEA", 
        "Counts": 2859, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SEA", 
        "Counts": 2384, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SEA", 
        "Counts": 933, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SEA", 
        "Counts": 1865, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SEA", 
        "Counts": 2514, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SEA", 
        "Counts": 577, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SFO", 
        "Counts": 1708, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SFO", 
        "Counts": 2859, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SFO", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SJC", 
        "Counts": 244, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SJC", 
        "Counts": 1242, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SJC", 
        "Counts": 2383, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SLC", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SLC", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SLC", 
        "Counts": 342, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SLC", 
        "Counts": 932, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SLC", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SMF", 
        "Counts": 1865, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SNA", 
        "Counts": 1014, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SNA", 
        "Counts": 2515, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "STL", 
        "Counts": 577, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "TPA", 
        "Counts": 366, 
        "UniqueCarrier": "AS"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "AUS", 
        "Counts": 377, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "AUS", 
        "Counts": 378, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "AUS", 
        "Counts": 676, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "AUS", 
        "Counts": 378, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BNA", 
        "Counts": 472, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BNA", 
        "Counts": 241, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BOS", 
        "Counts": 377, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "BOS", 
        "Counts": 472, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "BOS", 
        "Counts": 1939, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BOS", 
        "Counts": 913, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BOS", 
        "Counts": 672, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "BOS", 
        "Counts": 3525, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BOS", 
        "Counts": 682, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BOS", 
        "Counts": 647, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BOS", 
        "Counts": 1044, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BOS", 
        "Counts": 1531, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BOS", 
        "Counts": 2085, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "BOS", 
        "Counts": 1021, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "BOS", 
        "Counts": 2736, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BOS", 
        "Counts": 841, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BOS", 
        "Counts": 1056, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BOS", 
        "Counts": 291, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BOS", 
        "Counts": 2583, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "BOS", 
        "Counts": 516, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "BOS", 
        "Counts": 98, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BOS", 
        "Counts": 1034, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "BOS", 
        "Counts": 202, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BOS", 
        "Counts": 1651, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BOS", 
        "Counts": 1321, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BOS", 
        "Counts": 1701, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BOS", 
        "Counts": 1790, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BOS", 
        "Counts": 674, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BOS", 
        "Counts": 735, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BOS", 
        "Counts": 1057, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "BOS", 
        "Counts": 241, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BOS", 
        "Counts": 224, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "BOS", 
        "Counts": 61, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BOS", 
        "Counts": 1440, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BWI", 
        "Counts": 1939, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BWI", 
        "Counts": 606, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLE", 
        "Counts": 913, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "CLE", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLT", 
        "Counts": 672, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "CLT", 
        "Counts": 685, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "CLT", 
        "Counts": 1, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "CLT", 
        "Counts": 1, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DCA", 
        "Counts": 3522, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DCA", 
        "Counts": 1523, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DCA", 
        "Counts": 1492, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DCA", 
        "Counts": 442, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DCA", 
        "Counts": 490, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DEN", 
        "Counts": 682, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DEN", 
        "Counts": 418, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 4, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DFW", 
        "Counts": 647, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DTW", 
        "Counts": 1045, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "EWR", 
        "Counts": 1530, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "EWR", 
        "Counts": 1547, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "EWR", 
        "Counts": 2188, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "EWR", 
        "Counts": 669, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "EWR", 
        "Counts": 428, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "FLL", 
        "Counts": 378, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "FLL", 
        "Counts": 241, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "FLL", 
        "Counts": 2079, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "FLL", 
        "Counts": 606, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "FLL", 
        "Counts": 1523, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "FLL", 
        "Counts": 1552, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "FLL", 
        "Counts": 2655, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "FLL", 
        "Counts": 365, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "FLL", 
        "Counts": 731, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "FLL", 
        "Counts": 2110, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "FLL", 
        "Counts": 94, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "FLL", 
        "Counts": 648, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "FLL", 
        "Counts": 197, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "FLL", 
        "Counts": 731, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "HOU", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "HOU", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "IAD", 
        "Counts": 1021, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "IAD", 
        "Counts": 1042, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "JFK", 
        "Counts": 675, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "JFK", 
        "Counts": 2738, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "JFK", 
        "Counts": 685, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "JFK", 
        "Counts": 418, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "JFK", 
        "Counts": 2668, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "JFK", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "JFK", 
        "Counts": 1041, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "JFK", 
        "Counts": 1261, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "JFK", 
        "Counts": 3162, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "JFK", 
        "Counts": 2985, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "JFK", 
        "Counts": 853, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "JFK", 
        "Counts": 312, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "JFK", 
        "Counts": 1025, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "JFK", 
        "Counts": 329, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "JFK", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "JFK", 
        "Counts": 887, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "JFK", 
        "Counts": 1108, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "JFK", 
        "Counts": 690, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "JFK", 
        "Counts": 459, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "JFK", 
        "Counts": 2015, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "JFK", 
        "Counts": 342, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "JFK", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "JFK", 
        "Counts": 331, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "JFK", 
        "Counts": 1396, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAS", 
        "Counts": 842, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAS", 
        "Counts": 365, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAS", 
        "Counts": 1260, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 847, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAX", 
        "Counts": 1057, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAX", 
        "Counts": 729, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAX", 
        "Counts": 3164, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LGA", 
        "Counts": 291, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LGA", 
        "Counts": 2102, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LGA", 
        "Counts": 1773, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "LGA", 
        "Counts": 303, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LGA", 
        "Counts": 482, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MCO", 
        "Counts": 378, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCO", 
        "Counts": 2574, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCO", 
        "Counts": 1493, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCO", 
        "Counts": 2187, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MCO", 
        "Counts": 2982, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCO", 
        "Counts": 1774, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MSY", 
        "Counts": 515, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSY", 
        "Counts": 94, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MSY", 
        "Counts": 854, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "OAK", 
        "Counts": 98, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "OAK", 
        "Counts": 1, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "OAK", 
        "Counts": 3, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "OAK", 
        "Counts": 312, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "OAK", 
        "Counts": 7, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ORD", 
        "Counts": 1033, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "ORD", 
        "Counts": 1026, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PDX", 
        "Counts": 202, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PDX", 
        "Counts": 329, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PHL", 
        "Counts": 1649, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHL", 
        "Counts": 649, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PHX", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PHX", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PIT", 
        "Counts": 1321, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PIT", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "RDU", 
        "Counts": 1700, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "RDU", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "RDU", 
        "Counts": 888, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "RSW", 
        "Counts": 1791, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "RSW", 
        "Counts": 442, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "RSW", 
        "Counts": 670, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "RSW", 
        "Counts": 1107, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RSW", 
        "Counts": 303, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SAN", 
        "Counts": 673, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SAN", 
        "Counts": 197, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SAN", 
        "Counts": 690, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SEA", 
        "Counts": 736, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SEA", 
        "Counts": 459, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SFO", 
        "Counts": 1057, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 4, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SFO", 
        "Counts": 728, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SFO", 
        "Counts": 2016, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 841, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SJC", 
        "Counts": 241, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SJC", 
        "Counts": 1, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SJC", 
        "Counts": 342, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SLC", 
        "Counts": 224, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SLC", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SLC", 
        "Counts": 366, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SMF", 
        "Counts": 61, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SMF", 
        "Counts": 331, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "TPA", 
        "Counts": 1442, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "TPA", 
        "Counts": 490, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "TPA", 
        "Counts": 428, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "TPA", 
        "Counts": 1397, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "TPA", 
        "Counts": 481, 
        "UniqueCarrier": "B6"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ATL", 
        "Counts": 2454, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ATL", 
        "Counts": 3819, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ATL", 
        "Counts": 3913, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ATL", 
        "Counts": 3866, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ATL", 
        "Counts": 2583, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ATL", 
        "Counts": 3861, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "ATL", 
        "Counts": 1662, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ATL", 
        "Counts": 4668, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ATL", 
        "Counts": 2774, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ATL", 
        "Counts": 3943, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ATL", 
        "Counts": 3870, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ATL", 
        "Counts": 3748, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ATL", 
        "Counts": 5143, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "ATL", 
        "Counts": 367, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "ATL", 
        "Counts": 1890, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ATL", 
        "Counts": 2306, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 2494, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "ATL", 
        "Counts": 2350, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ATL", 
        "Counts": 2734, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ATL", 
        "Counts": 3917, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ATL", 
        "Counts": 5524, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ATL", 
        "Counts": 2833, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ATL", 
        "Counts": 5882, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "ATL", 
        "Counts": 2578, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ATL", 
        "Counts": 4282, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ATL", 
        "Counts": 3879, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ATL", 
        "Counts": 4637, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "ATL", 
        "Counts": 54, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 3981, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ATL", 
        "Counts": 1201, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ATL", 
        "Counts": 3739, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ATL", 
        "Counts": 2049, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ATL", 
        "Counts": 2855, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ATL", 
        "Counts": 4254, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ATL", 
        "Counts": 3282, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ATL", 
        "Counts": 1912, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ATL", 
        "Counts": 2417, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ATL", 
        "Counts": 2451, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ATL", 
        "Counts": 2442, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "ATL", 
        "Counts": 513, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ATL", 
        "Counts": 2785, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "ATL", 
        "Counts": 624, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "ATL", 
        "Counts": 1046, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ATL", 
        "Counts": 2762, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ATL", 
        "Counts": 5159, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "AUS", 
        "Counts": 2454, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "AUS", 
        "Counts": 402, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "AUS", 
        "Counts": 643, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "AUS", 
        "Counts": 170, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "AUS", 
        "Counts": 276, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "AUS", 
        "Counts": 431, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BNA", 
        "Counts": 3818, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BNA", 
        "Counts": 1316, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BNA", 
        "Counts": 474, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BNA", 
        "Counts": 5, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BNA", 
        "Counts": 77, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BNA", 
        "Counts": 89, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BOS", 
        "Counts": 3913, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BOS", 
        "Counts": 2553, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BOS", 
        "Counts": 27, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "BOS", 
        "Counts": 1445, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BOS", 
        "Counts": 675, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BOS", 
        "Counts": 2487, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BOS", 
        "Counts": 667, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BOS", 
        "Counts": 2008, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BOS", 
        "Counts": 254, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BOS", 
        "Counts": 769, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BWI", 
        "Counts": 3866, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BWI", 
        "Counts": 1620, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BWI", 
        "Counts": 1147, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BWI", 
        "Counts": 620, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLE", 
        "Counts": 2583, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLE", 
        "Counts": 58, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "CLE", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLE", 
        "Counts": 4, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLE", 
        "Counts": 200, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLT", 
        "Counts": 3861, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLT", 
        "Counts": 1299, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLT", 
        "Counts": 7, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLT", 
        "Counts": 824, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "CLT", 
        "Counts": 354, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DAL", 
        "Counts": 1662, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DCA", 
        "Counts": 4671, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DCA", 
        "Counts": 2005, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DCA", 
        "Counts": 479, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DCA", 
        "Counts": 1859, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DCA", 
        "Counts": 691, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DEN", 
        "Counts": 2776, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 1239, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DEN", 
        "Counts": 768, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DEN", 
        "Counts": 746, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 1985, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 416, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DEN", 
        "Counts": 1049, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DFW", 
        "Counts": 3945, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DFW", 
        "Counts": 317, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DFW", 
        "Counts": 3, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DFW", 
        "Counts": 92, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DFW", 
        "Counts": 274, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DFW", 
        "Counts": 886, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DTW", 
        "Counts": 3869, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DTW", 
        "Counts": 397, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DTW", 
        "Counts": 1317, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DTW", 
        "Counts": 2547, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DTW", 
        "Counts": 1622, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DTW", 
        "Counts": 51, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DTW", 
        "Counts": 1306, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DTW", 
        "Counts": 2009, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 1240, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DTW", 
        "Counts": 312, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DTW", 
        "Counts": 885, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DTW", 
        "Counts": 1846, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DTW", 
        "Counts": 41, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DTW", 
        "Counts": 87, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DTW", 
        "Counts": 392, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DTW", 
        "Counts": 1792, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DTW", 
        "Counts": 1881, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DTW", 
        "Counts": 2864, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DTW", 
        "Counts": 1139, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DTW", 
        "Counts": 2147, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DTW", 
        "Counts": 4, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DTW", 
        "Counts": 854, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DTW", 
        "Counts": 2741, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DTW", 
        "Counts": 748, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DTW", 
        "Counts": 1475, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DTW", 
        "Counts": 233, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DTW", 
        "Counts": 1730, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DTW", 
        "Counts": 1297, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DTW", 
        "Counts": 491, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DTW", 
        "Counts": 748, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DTW", 
        "Counts": 1131, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DTW", 
        "Counts": 789, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DTW", 
        "Counts": 124, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DTW", 
        "Counts": 1770, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DTW", 
        "Counts": 1421, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DTW", 
        "Counts": 1517, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DTW", 
        "Counts": 743, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DTW", 
        "Counts": 1675, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "EWR", 
        "Counts": 3747, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "EWR", 
        "Counts": 874, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "EWR", 
        "Counts": 484, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "EWR", 
        "Counts": 372, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "FLL", 
        "Counts": 5145, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "FLL", 
        "Counts": 27, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "FLL", 
        "Counts": 1845, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "FLL", 
        "Counts": 1585, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "FLL", 
        "Counts": 2106, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "FLL", 
        "Counts": 472, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "FLL", 
        "Counts": 8, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "HNL", 
        "Counts": 367, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "HNL", 
        "Counts": 25, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HNL", 
        "Counts": 1431, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "HNL", 
        "Counts": 131, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "HNL", 
        "Counts": 20, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "HNL", 
        "Counts": 607, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "HNL", 
        "Counts": 12, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "HNL", 
        "Counts": 356, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "HOU", 
        "Counts": 1889, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAD", 
        "Counts": 2304, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAD", 
        "Counts": 42, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAD", 
        "Counts": 249, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 2491, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAH", 
        "Counts": 135, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "IAH", 
        "Counts": 3, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAH", 
        "Counts": 9, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "IAH", 
        "Counts": 274, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "JFK", 
        "Counts": 2342, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "JFK", 
        "Counts": 643, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "JFK", 
        "Counts": 1442, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "JFK", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "JFK", 
        "Counts": 479, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "JFK", 
        "Counts": 767, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "JFK", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "JFK", 
        "Counts": 379, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "JFK", 
        "Counts": 1584, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "JFK", 
        "Counts": 25, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "JFK", 
        "Counts": 1702, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "JFK", 
        "Counts": 3096, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "JFK", 
        "Counts": 1766, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "JFK", 
        "Counts": 1451, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "JFK", 
        "Counts": 1074, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "JFK", 
        "Counts": 456, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "JFK", 
        "Counts": 5, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "JFK", 
        "Counts": 621, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "JFK", 
        "Counts": 5, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "JFK", 
        "Counts": 842, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "JFK", 
        "Counts": 22, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "JFK", 
        "Counts": 230, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "JFK", 
        "Counts": 69, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "JFK", 
        "Counts": 936, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "JFK", 
        "Counts": 347, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "JFK", 
        "Counts": 1412, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "JFK", 
        "Counts": 2459, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "JFK", 
        "Counts": 1634, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "JFK", 
        "Counts": 1263, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAS", 
        "Counts": 2727, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAS", 
        "Counts": 1792, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAS", 
        "Counts": 1703, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 1416, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAS", 
        "Counts": 2225, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAS", 
        "Counts": 1206, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAS", 
        "Counts": 13, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAS", 
        "Counts": 2061, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAX", 
        "Counts": 3921, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAX", 
        "Counts": 171, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAX", 
        "Counts": 474, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAX", 
        "Counts": 675, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAX", 
        "Counts": 4, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAX", 
        "Counts": 1879, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAX", 
        "Counts": 1432, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAX", 
        "Counts": 3097, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 1416, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAX", 
        "Counts": 142, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAX", 
        "Counts": 1032, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LAX", 
        "Counts": 332, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAX", 
        "Counts": 2422, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAX", 
        "Counts": 1027, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAX", 
        "Counts": 744, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAX", 
        "Counts": 1418, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 385, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LAX", 
        "Counts": 457, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAX", 
        "Counts": 274, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAX", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 2747, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 3773, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAX", 
        "Counts": 1320, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAX", 
        "Counts": 2613, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "LAX", 
        "Counts": 459, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LAX", 
        "Counts": 456, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LGA", 
        "Counts": 5523, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LGA", 
        "Counts": 5, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LGA", 
        "Counts": 2499, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LGA", 
        "Counts": 4, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LGA", 
        "Counts": 3, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LGA", 
        "Counts": 748, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LGA", 
        "Counts": 91, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LGA", 
        "Counts": 2865, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LGA", 
        "Counts": 2106, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LGA", 
        "Counts": 3, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LGA", 
        "Counts": 5, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LGA", 
        "Counts": 2231, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LGA", 
        "Counts": 2105, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LGA", 
        "Counts": 2365, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LGA", 
        "Counts": 422, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LGA", 
        "Counts": 11, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LGA", 
        "Counts": 97, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "LGA", 
        "Counts": 462, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LGA", 
        "Counts": 1438, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCI", 
        "Counts": 2831, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCI", 
        "Counts": 1140, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCI", 
        "Counts": 143, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCI", 
        "Counts": 4, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCI", 
        "Counts": 1392, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MCI", 
        "Counts": 665, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCO", 
        "Counts": 5886, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCO", 
        "Counts": 670, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCO", 
        "Counts": 2148, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MCO", 
        "Counts": 1764, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCO", 
        "Counts": 1032, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCO", 
        "Counts": 2230, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MCO", 
        "Counts": 364, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCO", 
        "Counts": 1497, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MCO", 
        "Counts": 463, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MCO", 
        "Counts": 234, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MCO", 
        "Counts": 1039, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MDW", 
        "Counts": 2578, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MDW", 
        "Counts": 4, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MDW", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MIA", 
        "Counts": 4280, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MIA", 
        "Counts": 854, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MIA", 
        "Counts": 1451, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MIA", 
        "Counts": 332, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MIA", 
        "Counts": 2107, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MIA", 
        "Counts": 362, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MIA", 
        "Counts": 475, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MIA", 
        "Counts": 9, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSP", 
        "Counts": 3880, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MSP", 
        "Counts": 278, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MSP", 
        "Counts": 77, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MSP", 
        "Counts": 2007, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MSP", 
        "Counts": 1145, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MSP", 
        "Counts": 207, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSP", 
        "Counts": 822, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MSP", 
        "Counts": 1858, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 1983, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSP", 
        "Counts": 279, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSP", 
        "Counts": 2743, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSP", 
        "Counts": 471, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSP", 
        "Counts": 472, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "MSP", 
        "Counts": 131, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSP", 
        "Counts": 249, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSP", 
        "Counts": 44, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MSP", 
        "Counts": 1073, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MSP", 
        "Counts": 2224, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSP", 
        "Counts": 2422, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSP", 
        "Counts": 2367, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSP", 
        "Counts": 1394, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSP", 
        "Counts": 1499, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSP", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MSP", 
        "Counts": 475, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MSP", 
        "Counts": 404, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 1747, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MSP", 
        "Counts": 1454, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSP", 
        "Counts": 1277, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSP", 
        "Counts": 1863, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MSP", 
        "Counts": 472, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MSP", 
        "Counts": 388, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MSP", 
        "Counts": 807, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MSP", 
        "Counts": 1200, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MSP", 
        "Counts": 47, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MSP", 
        "Counts": 2254, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MSP", 
        "Counts": 1906, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "MSP", 
        "Counts": 512, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MSP", 
        "Counts": 2005, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "MSP", 
        "Counts": 594, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "MSP", 
        "Counts": 1001, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSP", 
        "Counts": 1405, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MSP", 
        "Counts": 951, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSY", 
        "Counts": 4636, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSY", 
        "Counts": 759, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MSY", 
        "Counts": 456, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSY", 
        "Counts": 1027, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSY", 
        "Counts": 412, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MSY", 
        "Counts": 405, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MSY", 
        "Counts": 233, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "OAK", 
        "Counts": 54, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "OAK", 
        "Counts": 744, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "OAK", 
        "Counts": 1034, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 3987, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ORD", 
        "Counts": 1473, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "ORD", 
        "Counts": 3, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 1744, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ORD", 
        "Counts": 407, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PDX", 
        "Counts": 1202, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PDX", 
        "Counts": 233, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PDX", 
        "Counts": 20, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PDX", 
        "Counts": 621, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PDX", 
        "Counts": 1417, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PDX", 
        "Counts": 1453, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PDX", 
        "Counts": 417, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PDX", 
        "Counts": 2037, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHL", 
        "Counts": 3739, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHL", 
        "Counts": 1730, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PHL", 
        "Counts": 3, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHL", 
        "Counts": 1280, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHL", 
        "Counts": 350, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHX", 
        "Counts": 2046, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHX", 
        "Counts": 1294, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PHX", 
        "Counts": 832, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 385, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHX", 
        "Counts": 1855, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 229, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHX", 
        "Counts": 1154, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PIT", 
        "Counts": 2855, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PIT", 
        "Counts": 460, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PIT", 
        "Counts": 24, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "PIT", 
        "Counts": 11, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PIT", 
        "Counts": 501, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RDU", 
        "Counts": 4254, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RDU", 
        "Counts": 757, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "RDU", 
        "Counts": 218, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "RDU", 
        "Counts": 457, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RDU", 
        "Counts": 103, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "RDU", 
        "Counts": 463, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RDU", 
        "Counts": 381, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "RDU", 
        "Counts": 284, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RSW", 
        "Counts": 3282, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RSW", 
        "Counts": 1132, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "RSW", 
        "Counts": 68, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RSW", 
        "Counts": 460, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RSW", 
        "Counts": 807, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAN", 
        "Counts": 1909, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SAN", 
        "Counts": 791, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SAN", 
        "Counts": 936, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAN", 
        "Counts": 274, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SAN", 
        "Counts": 1200, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAN", 
        "Counts": 197, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAN", 
        "Counts": 1778, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAT", 
        "Counts": 2417, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SAT", 
        "Counts": 123, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SAT", 
        "Counts": 346, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAT", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SAT", 
        "Counts": 50, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAT", 
        "Counts": 407, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SEA", 
        "Counts": 2442, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SEA", 
        "Counts": 254, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 419, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SEA", 
        "Counts": 1770, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SEA", 
        "Counts": 9, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SEA", 
        "Counts": 607, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SEA", 
        "Counts": 1411, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SEA", 
        "Counts": 1205, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 2753, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SEA", 
        "Counts": 237, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SEA", 
        "Counts": 2258, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SEA", 
        "Counts": 418, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 229, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SEA", 
        "Counts": 196, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SEA", 
        "Counts": 135, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SEA", 
        "Counts": 2402, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SEA", 
        "Counts": 6, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SFO", 
        "Counts": 2440, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SFO", 
        "Counts": 1421, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SFO", 
        "Counts": 12, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SFO", 
        "Counts": 2459, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 3767, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SFO", 
        "Counts": 1904, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SFO", 
        "Counts": 136, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SFO", 
        "Counts": 974, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SJC", 
        "Counts": 514, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SJC", 
        "Counts": 1, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SJC", 
        "Counts": 13, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SJC", 
        "Counts": 1321, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SJC", 
        "Counts": 512, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SJC", 
        "Counts": 958, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SLC", 
        "Counts": 2775, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SLC", 
        "Counts": 433, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SLC", 
        "Counts": 88, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SLC", 
        "Counts": 768, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SLC", 
        "Counts": 621, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SLC", 
        "Counts": 355, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SLC", 
        "Counts": 691, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SLC", 
        "Counts": 1047, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SLC", 
        "Counts": 884, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SLC", 
        "Counts": 1519, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SLC", 
        "Counts": 372, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SLC", 
        "Counts": 356, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SLC", 
        "Counts": 284, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SLC", 
        "Counts": 1632, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SLC", 
        "Counts": 2062, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SLC", 
        "Counts": 2615, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SLC", 
        "Counts": 664, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SLC", 
        "Counts": 1042, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SLC", 
        "Counts": 10, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SLC", 
        "Counts": 2006, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SLC", 
        "Counts": 233, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SLC", 
        "Counts": 1034, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SLC", 
        "Counts": 405, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SLC", 
        "Counts": 2036, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SLC", 
        "Counts": 349, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SLC", 
        "Counts": 1162, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "SLC", 
        "Counts": 284, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SLC", 
        "Counts": 1778, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SLC", 
        "Counts": 409, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SLC", 
        "Counts": 2409, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SLC", 
        "Counts": 969, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SLC", 
        "Counts": 960, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SLC", 
        "Counts": 778, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SLC", 
        "Counts": 791, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SLC", 
        "Counts": 369, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SMF", 
        "Counts": 624, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SMF", 
        "Counts": 454, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SMF", 
        "Counts": 594, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SMF", 
        "Counts": 6, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SMF", 
        "Counts": 783, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SNA", 
        "Counts": 1047, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SNA", 
        "Counts": 1001, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SNA", 
        "Counts": 792, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "STL", 
        "Counts": 2762, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "STL", 
        "Counts": 734, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "STL", 
        "Counts": 1403, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "STL", 
        "Counts": 380, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "TPA", 
        "Counts": 5157, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "TPA", 
        "Counts": 1675, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "TPA", 
        "Counts": 1263, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "TPA", 
        "Counts": 455, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "TPA", 
        "Counts": 1436, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "TPA", 
        "Counts": 953, 
        "UniqueCarrier": "DL"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ATL", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ATL", 
        "Counts": 11, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ATL", 
        "Counts": 14, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "ATL", 
        "Counts": 34, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ATL", 
        "Counts": 3, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ATL", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ATL", 
        "Counts": 114, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "ATL", 
        "Counts": 356, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ATL", 
        "Counts": 6, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 399, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "ATL", 
        "Counts": 5, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 71, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ATL", 
        "Counts": 4, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "AUS", 
        "Counts": 6, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "AUS", 
        "Counts": 82, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "AUS", 
        "Counts": 51, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BNA", 
        "Counts": 3, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BNA", 
        "Counts": 104, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BNA", 
        "Counts": 953, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BNA", 
        "Counts": 562, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BNA", 
        "Counts": 330, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BNA", 
        "Counts": 6, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BNA", 
        "Counts": 136, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BOS", 
        "Counts": 953, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BOS", 
        "Counts": 11, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BOS", 
        "Counts": 128, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BOS", 
        "Counts": 5, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BWI", 
        "Counts": 22, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BWI", 
        "Counts": 197, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BWI", 
        "Counts": 4, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BWI", 
        "Counts": 50, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLE", 
        "Counts": 12, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLE", 
        "Counts": 928, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "CLE", 
        "Counts": 1544, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLE", 
        "Counts": 757, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLE", 
        "Counts": 809, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLE", 
        "Counts": 745, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLE", 
        "Counts": 2535, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLE", 
        "Counts": 10, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLE", 
        "Counts": 717, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLE", 
        "Counts": 740, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLE", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "CLE", 
        "Counts": 296, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "CLE", 
        "Counts": 188, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLT", 
        "Counts": 15, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLT", 
        "Counts": 87, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLT", 
        "Counts": 96, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLT", 
        "Counts": 50, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLT", 
        "Counts": 640, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLT", 
        "Counts": 60, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLT", 
        "Counts": 26, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DAL", 
        "Counts": 34, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DCA", 
        "Counts": 3, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DCA", 
        "Counts": 1542, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DCA", 
        "Counts": 123, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DCA", 
        "Counts": 2048, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DFW", 
        "Counts": 145, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DFW", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DFW", 
        "Counts": 595, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DFW", 
        "Counts": 49, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DFW", 
        "Counts": 38, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DTW", 
        "Counts": 48, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DTW", 
        "Counts": 100, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DTW", 
        "Counts": 10, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DTW", 
        "Counts": 22, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DTW", 
        "Counts": 858, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DTW", 
        "Counts": 74, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DTW", 
        "Counts": 123, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DTW", 
        "Counts": 94, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DTW", 
        "Counts": 622, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DTW", 
        "Counts": 370, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DTW", 
        "Counts": 517, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DTW", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DTW", 
        "Counts": 87, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DTW", 
        "Counts": 774, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DTW", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DTW", 
        "Counts": 47, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DTW", 
        "Counts": 279, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DTW", 
        "Counts": 108, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DTW", 
        "Counts": 197, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DTW", 
        "Counts": 154, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DTW", 
        "Counts": 128, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DTW", 
        "Counts": 212, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "EWR", 
        "Counts": 128, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "EWR", 
        "Counts": 923, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "EWR", 
        "Counts": 151, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "EWR", 
        "Counts": 191, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "EWR", 
        "Counts": 503, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "EWR", 
        "Counts": 81, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "EWR", 
        "Counts": 2041, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "EWR", 
        "Counts": 542, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "EWR", 
        "Counts": 3, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "EWR", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "EWR", 
        "Counts": 62, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "EWR", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "EWR", 
        "Counts": 133, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "EWR", 
        "Counts": 56, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "EWR", 
        "Counts": 432, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "EWR", 
        "Counts": 121, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "EWR", 
        "Counts": 1358, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "FLL", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "HOU", 
        "Counts": 357, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "HOU", 
        "Counts": 595, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAD", 
        "Counts": 6, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAD", 
        "Counts": 369, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "IAD", 
        "Counts": 3, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAD", 
        "Counts": 94, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 452, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "IAH", 
        "Counts": 79, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "IAH", 
        "Counts": 629, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "IAH", 
        "Counts": 8, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "IAH", 
        "Counts": 869, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAH", 
        "Counts": 33, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAH", 
        "Counts": 50, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAH", 
        "Counts": 670, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "IAH", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "IAH", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "IAH", 
        "Counts": 316, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAH", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAH", 
        "Counts": 279, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAH", 
        "Counts": 114, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAH", 
        "Counts": 6, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "IAH", 
        "Counts": 39, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "IAH", 
        "Counts": 25, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "IAH", 
        "Counts": 15, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "IAH", 
        "Counts": 74, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "IAH", 
        "Counts": 13, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "IAH", 
        "Counts": 648, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LGA", 
        "Counts": 247, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LGA", 
        "Counts": 2528, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LGA", 
        "Counts": 641, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LGA", 
        "Counts": 8, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LGA", 
        "Counts": 2, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LGA", 
        "Counts": 148, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LGA", 
        "Counts": 22, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LGA", 
        "Counts": 242, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LGA", 
        "Counts": 471, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LGA", 
        "Counts": 141, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCI", 
        "Counts": 90, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCI", 
        "Counts": 77, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCI", 
        "Counts": 250, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCI", 
        "Counts": 145, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCI", 
        "Counts": 23, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCI", 
        "Counts": 242, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MCO", 
        "Counts": 10, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MDW", 
        "Counts": 5, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MDW", 
        "Counts": 768, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MDW", 
        "Counts": 199, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MIA", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MIA", 
        "Counts": 4, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MSP", 
        "Counts": 10, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MSP", 
        "Counts": 93, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MSP", 
        "Counts": 626, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSP", 
        "Counts": 73, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSP", 
        "Counts": 87, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSP", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSP", 
        "Counts": 165, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSP", 
        "Counts": 94, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSP", 
        "Counts": 484, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSP", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSP", 
        "Counts": 22, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSP", 
        "Counts": 193, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 74, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSP", 
        "Counts": 17, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MSP", 
        "Counts": 109, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MSP", 
        "Counts": 81, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MSP", 
        "Counts": 15, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSP", 
        "Counts": 52, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSY", 
        "Counts": 47, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSY", 
        "Counts": 76, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSY", 
        "Counts": 112, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSY", 
        "Counts": 22, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSY", 
        "Counts": 35, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 58, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ORD", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ORD", 
        "Counts": 96, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ORD", 
        "Counts": 52, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ORD", 
        "Counts": 907, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ORD", 
        "Counts": 57, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ORD", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ORD", 
        "Counts": 353, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ORD", 
        "Counts": 1, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ORD", 
        "Counts": 194, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 86, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ORD", 
        "Counts": 51, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 20, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ORD", 
        "Counts": 137, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ORD", 
        "Counts": 57, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ORD", 
        "Counts": 545, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHL", 
        "Counts": 107, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHL", 
        "Counts": 17, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 20, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHX", 
        "Counts": 6, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PIT", 
        "Counts": 5, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PIT", 
        "Counts": 143, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PIT", 
        "Counts": 467, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PIT", 
        "Counts": 37, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "PIT", 
        "Counts": 247, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PIT", 
        "Counts": 157, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PIT", 
        "Counts": 104, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "RDU", 
        "Counts": 3, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RDU", 
        "Counts": 295, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RDU", 
        "Counts": 176, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "RDU", 
        "Counts": 133, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RDU", 
        "Counts": 20, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RDU", 
        "Counts": 400, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "RDU", 
        "Counts": 4, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RDU", 
        "Counts": 155, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RDU", 
        "Counts": 50, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RSW", 
        "Counts": 15, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SAT", 
        "Counts": 124, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAT", 
        "Counts": 80, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SAT", 
        "Counts": 19, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SLC", 
        "Counts": 13, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "STL", 
        "Counts": 188, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "STL", 
        "Counts": 212, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "STL", 
        "Counts": 1379, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "STL", 
        "Counts": 766, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "STL", 
        "Counts": 141, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "STL", 
        "Counts": 53, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "STL", 
        "Counts": 411, 
        "UniqueCarrier": "EV"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ATL", 
        "Counts": 105, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ATL", 
        "Counts": 125, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ATL", 
        "Counts": 732, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ATL", 
        "Counts": 72, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 85, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ATL", 
        "Counts": 411, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ATL", 
        "Counts": 116, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ATL", 
        "Counts": 360, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ATL", 
        "Counts": 115, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ATL", 
        "Counts": 185, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ATL", 
        "Counts": 335, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ATL", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ATL", 
        "Counts": 5, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ATL", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ATL", 
        "Counts": 78, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ATL", 
        "Counts": 83, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ATL", 
        "Counts": 98, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ATL", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ATL", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ATL", 
        "Counts": 85, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "AUS", 
        "Counts": 105, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "AUS", 
        "Counts": 411, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "AUS", 
        "Counts": 294, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "AUS", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "AUS", 
        "Counts": 110, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "AUS", 
        "Counts": 72, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BNA", 
        "Counts": 349, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BNA", 
        "Counts": 111, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BNA", 
        "Counts": 120, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BNA", 
        "Counts": 141, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BNA", 
        "Counts": 110, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BNA", 
        "Counts": 11, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLE", 
        "Counts": 125, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLE", 
        "Counts": 365, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLE", 
        "Counts": 355, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "CLE", 
        "Counts": 85, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLE", 
        "Counts": 592, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "CLE", 
        "Counts": 55, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLE", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLE", 
        "Counts": 137, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "CLE", 
        "Counts": 85, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLE", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "CLE", 
        "Counts": 72, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "CLE", 
        "Counts": 115, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "CLE", 
        "Counts": 369, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLT", 
        "Counts": 294, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLT", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLT", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLT", 
        "Counts": 153, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DCA", 
        "Counts": 1095, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DEN", 
        "Counts": 731, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DEN", 
        "Counts": 411, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DEN", 
        "Counts": 349, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DEN", 
        "Counts": 363, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DEN", 
        "Counts": 295, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DEN", 
        "Counts": 1096, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DEN", 
        "Counts": 769, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 267, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DEN", 
        "Counts": 169, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DEN", 
        "Counts": 696, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DEN", 
        "Counts": 1333, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 733, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DEN", 
        "Counts": 262, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DEN", 
        "Counts": 365, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DEN", 
        "Counts": 865, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DEN", 
        "Counts": 367, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 849, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DEN", 
        "Counts": 267, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DEN", 
        "Counts": 730, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DEN", 
        "Counts": 874, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DEN", 
        "Counts": 291, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 777, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DEN", 
        "Counts": 199, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DEN", 
        "Counts": 201, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DEN", 
        "Counts": 168, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DEN", 
        "Counts": 895, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DEN", 
        "Counts": 232, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 788, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 1024, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DEN", 
        "Counts": 1124, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DEN", 
        "Counts": 712, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DEN", 
        "Counts": 490, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DFW", 
        "Counts": 771, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DFW", 
        "Counts": 85, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 266, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DTW", 
        "Counts": 281, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DTW", 
        "Counts": 173, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DTW", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAD", 
        "Counts": 72, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAD", 
        "Counts": 169, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAD", 
        "Counts": 335, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAD", 
        "Counts": 52, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 86, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAH", 
        "Counts": 698, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAH", 
        "Counts": 339, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAH", 
        "Counts": 83, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "IAH", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "IAH", 
        "Counts": 235, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAS", 
        "Counts": 410, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAS", 
        "Counts": 292, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAS", 
        "Counts": 111, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAS", 
        "Counts": 356, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAS", 
        "Counts": 1334, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAS", 
        "Counts": 335, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAS", 
        "Counts": 470, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LAS", 
        "Counts": 356, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAS", 
        "Counts": 505, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LAS", 
        "Counts": 197, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAS", 
        "Counts": 99, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 267, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAS", 
        "Counts": 99, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LAS", 
        "Counts": 361, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LAS", 
        "Counts": 111, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAX", 
        "Counts": 116, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAX", 
        "Counts": 86, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAX", 
        "Counts": 733, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAX", 
        "Counts": 362, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAX", 
        "Counts": 280, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAX", 
        "Counts": 1, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LGA", 
        "Counts": 362, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LGA", 
        "Counts": 263, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LGA", 
        "Counts": 363, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCI", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCI", 
        "Counts": 367, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MCI", 
        "Counts": 210, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCI", 
        "Counts": 52, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCI", 
        "Counts": 64, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCO", 
        "Counts": 181, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MCO", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MCO", 
        "Counts": 120, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MCO", 
        "Counts": 591, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MCO", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCO", 
        "Counts": 866, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MCO", 
        "Counts": 85, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCO", 
        "Counts": 281, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MCO", 
        "Counts": 334, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCO", 
        "Counts": 84, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MCO", 
        "Counts": 469, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MCO", 
        "Counts": 210, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCO", 
        "Counts": 178, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MCO", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCO", 
        "Counts": 470, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCO", 
        "Counts": 894, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MCO", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MCO", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MCO", 
        "Counts": 63, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MCO", 
        "Counts": 179, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MCO", 
        "Counts": 367, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MIA", 
        "Counts": 335, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MIA", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MIA", 
        "Counts": 357, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MIA", 
        "Counts": 365, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MIA", 
        "Counts": 252, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MIA", 
        "Counts": 293, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 849, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSP", 
        "Counts": 178, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 70, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSY", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSY", 
        "Counts": 267, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSY", 
        "Counts": 151, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSY", 
        "Counts": 137, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ORD", 
        "Counts": 110, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ORD", 
        "Counts": 141, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ORD", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ORD", 
        "Counts": 729, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ORD", 
        "Counts": 52, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ORD", 
        "Counts": 505, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ORD", 
        "Counts": 281, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ORD", 
        "Counts": 52, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ORD", 
        "Counts": 470, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ORD", 
        "Counts": 252, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 70, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ORD", 
        "Counts": 47, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 133, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ORD", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ORD", 
        "Counts": 58, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ORD", 
        "Counts": 102, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ORD", 
        "Counts": 104, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ORD", 
        "Counts": 151, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ORD", 
        "Counts": 239, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ORD", 
        "Counts": 238, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ORD", 
        "Counts": 132, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PDX", 
        "Counts": 55, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PDX", 
        "Counts": 873, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PDX", 
        "Counts": 47, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PDX", 
        "Counts": 79, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHL", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PHL", 
        "Counts": 72, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHL", 
        "Counts": 110, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHL", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PHL", 
        "Counts": 153, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHL", 
        "Counts": 295, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHL", 
        "Counts": 4, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PHL", 
        "Counts": 64, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHL", 
        "Counts": 895, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "PHL", 
        "Counts": 293, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "PHL", 
        "Counts": 137, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 133, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "PHL", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "PHL", 
        "Counts": 117, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "PHL", 
        "Counts": 98, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHL", 
        "Counts": 281, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHX", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHX", 
        "Counts": 11, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHX", 
        "Counts": 137, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 772, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHX", 
        "Counts": 174, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHX", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHX", 
        "Counts": 79, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 107, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHX", 
        "Counts": 171, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHX", 
        "Counts": 55, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHX", 
        "Counts": 15, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PIT", 
        "Counts": 78, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PIT", 
        "Counts": 198, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PIT", 
        "Counts": 198, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PIT", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PIT", 
        "Counts": 58, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RDU", 
        "Counts": 83, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RDU", 
        "Counts": 86, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RDU", 
        "Counts": 203, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "RDU", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RDU", 
        "Counts": 102, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "RDU", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RSW", 
        "Counts": 367, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RSW", 
        "Counts": 169, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RSW", 
        "Counts": 114, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RSW", 
        "Counts": 104, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "RSW", 
        "Counts": 117, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "RSW", 
        "Counts": 128, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAN", 
        "Counts": 894, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SAN", 
        "Counts": 64, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAT", 
        "Counts": 98, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAT", 
        "Counts": 232, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SAT", 
        "Counts": 99, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SAT", 
        "Counts": 98, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "SEA", 
        "Counts": 72, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 788, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SEA", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 107, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SFO", 
        "Counts": 150, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "SFO", 
        "Counts": 115, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 1027, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SFO", 
        "Counts": 235, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 267, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SFO", 
        "Counts": 177, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SFO", 
        "Counts": 240, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SFO", 
        "Counts": 170, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SLC", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SLC", 
        "Counts": 1123, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SLC", 
        "Counts": 99, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SLC", 
        "Counts": 238, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SLC", 
        "Counts": 55, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SNA", 
        "Counts": 712, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "STL", 
        "Counts": 86, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "STL", 
        "Counts": 369, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "STL", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "STL", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "STL", 
        "Counts": 15, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "STL", 
        "Counts": 128, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "STL", 
        "Counts": 104, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "TPA", 
        "Counts": 366, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "TPA", 
        "Counts": 500, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "TPA", 
        "Counts": 112, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "TPA", 
        "Counts": 133, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "TPA", 
        "Counts": 283, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "STL", 
        "Origin": "TPA", 
        "Counts": 105, 
        "UniqueCarrier": "F9"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "HNL", 
        "Counts": 350, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "HNL", 
        "Counts": 889, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HNL", 
        "Counts": 1098, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "HNL", 
        "Counts": 361, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "JFK", 
        "Counts": 350, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAS", 
        "Counts": 889, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAX", 
        "Counts": 1098, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "OAK", 
        "Counts": 361, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PHX", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SFO", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SJC", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SMF", 
        "Counts": 366, 
        "UniqueCarrier": "HA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ATL", 
        "Counts": 349, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ATL", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ATL", 
        "Counts": 1098, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ATL", 
        "Counts": 733, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ATL", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ATL", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 487, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ATL", 
        "Counts": 104, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ATL", 
        "Counts": 469, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "BOS", 
        "Counts": 511, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BOS", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BOS", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BOS", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BOS", 
        "Counts": 550, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BOS", 
        "Counts": 86, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BOS", 
        "Counts": 132, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BOS", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BOS", 
        "Counts": 173, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BWI", 
        "Counts": 511, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BWI", 
        "Counts": 255, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BWI", 
        "Counts": 1072, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BWI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BWI", 
        "Counts": 360, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BWI", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BWI", 
        "Counts": 669, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BWI", 
        "Counts": 63, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BWI", 
        "Counts": 52, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLE", 
        "Counts": 348, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLE", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "CLE", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "CLE", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLE", 
        "Counts": 365, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "CLE", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLE", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLE", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "CLE", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DEN", 
        "Counts": 558, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DEN", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 634, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 192, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DEN", 
        "Counts": 564, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 348, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DEN", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DFW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DFW", 
        "Counts": 211, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DFW", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DFW", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DFW", 
        "Counts": 559, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DFW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DFW", 
        "Counts": 787, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DFW", 
        "Counts": 923, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DFW", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DFW", 
        "Counts": 362, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DFW", 
        "Counts": 596, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DFW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DFW", 
        "Counts": 310, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "DFW", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DFW", 
        "Counts": 672, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DFW", 
        "Counts": 147, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DFW", 
        "Counts": 362, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DFW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DFW", 
        "Counts": 100, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DFW", 
        "Counts": 311, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DFW", 
        "Counts": 251, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DTW", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DTW", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DTW", 
        "Counts": 254, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DTW", 
        "Counts": 770, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DTW", 
        "Counts": 1098, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DTW", 
        "Counts": 418, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DTW", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DTW", 
        "Counts": 839, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DTW", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DTW", 
        "Counts": 247, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DTW", 
        "Counts": 560, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DTW", 
        "Counts": 580, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "EWR", 
        "Counts": 239, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "EWR", 
        "Counts": 115, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "FLL", 
        "Counts": 1098, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "FLL", 
        "Counts": 550, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "FLL", 
        "Counts": 1075, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "FLL", 
        "Counts": 789, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "FLL", 
        "Counts": 770, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "FLL", 
        "Counts": 241, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "FLL", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "FLL", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "FLL", 
        "Counts": 368, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "FLL", 
        "Counts": 1464, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "FLL", 
        "Counts": 734, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "FLL", 
        "Counts": 157, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "FLL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "FLL", 
        "Counts": 878, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "FLL", 
        "Counts": 247, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "FLL", 
        "Counts": 1, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "FLL", 
        "Counts": 524, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAH", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAH", 
        "Counts": 714, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAH", 
        "Counts": 434, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAH", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "IAH", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAH", 
        "Counts": 680, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAS", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAS", 
        "Counts": 923, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAS", 
        "Counts": 1098, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAS", 
        "Counts": 731, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 888, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAS", 
        "Counts": 584, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAS", 
        "Counts": 365, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAS", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAS", 
        "Counts": 879, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAS", 
        "Counts": 532, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAS", 
        "Counts": 365, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAS", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAS", 
        "Counts": 524, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAX", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAX", 
        "Counts": 634, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAX", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAX", 
        "Counts": 417, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAX", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAX", 
        "Counts": 714, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 887, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAX", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAX", 
        "Counts": 847, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAX", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAX", 
        "Counts": 282, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAX", 
        "Counts": 263, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 304, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 565, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LGA", 
        "Counts": 362, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LGA", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LGA", 
        "Counts": 1464, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LGA", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MCI", 
        "Counts": 52, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCO", 
        "Counts": 731, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCO", 
        "Counts": 86, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MCO", 
        "Counts": 359, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MCO", 
        "Counts": 593, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCO", 
        "Counts": 838, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCO", 
        "Counts": 114, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MCO", 
        "Counts": 734, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCO", 
        "Counts": 434, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MCO", 
        "Counts": 52, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCO", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCO", 
        "Counts": 522, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCO", 
        "Counts": 86, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSP", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MSP", 
        "Counts": 132, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MSP", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 192, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSP", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSP", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSP", 
        "Counts": 155, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSP", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MSP", 
        "Counts": 584, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSP", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSP", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 942, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSP", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSP", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MSP", 
        "Counts": 173, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MSP", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSY", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSY", 
        "Counts": 310, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSY", 
        "Counts": 367, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSY", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "OAK", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "OAK", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "OAK", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "OAK", 
        "Counts": 847, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "OAK", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 487, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ORD", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ORD", 
        "Counts": 669, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ORD", 
        "Counts": 564, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ORD", 
        "Counts": 672, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ORD", 
        "Counts": 878, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ORD", 
        "Counts": 680, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ORD", 
        "Counts": 878, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ORD", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ORD", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ORD", 
        "Counts": 522, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 942, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ORD", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "ORD", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ORD", 
        "Counts": 209, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 121, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ORD", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ORD", 
        "Counts": 403, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ORD", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ORD", 
        "Counts": 276, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PDX", 
        "Counts": 147, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PDX", 
        "Counts": 533, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PDX", 
        "Counts": 282, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PDX", 
        "Counts": 209, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PHL", 
        "Counts": 361, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHL", 
        "Counts": 248, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHL", 
        "Counts": 247, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHL", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHL", 
        "Counts": 262, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHL", 
        "Counts": 86, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHL", 
        "Counts": 210, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 121, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 348, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PHX", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 304, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHX", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHX", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RSW", 
        "Counts": 104, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "RSW", 
        "Counts": 173, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "RSW", 
        "Counts": 63, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RSW", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "RSW", 
        "Counts": 100, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RSW", 
        "Counts": 561, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RSW", 
        "Counts": 172, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RSW", 
        "Counts": 402, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAN", 
        "Counts": 314, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SAN", 
        "Counts": 311, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SAN", 
        "Counts": 732, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SEA", 
        "Counts": 523, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 565, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "TPA", 
        "Counts": 470, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "TPA", 
        "Counts": 52, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "TPA", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "TPA", 
        "Counts": 251, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "TPA", 
        "Counts": 581, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "TPA", 
        "Counts": 522, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "TPA", 
        "Counts": 366, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "TPA", 
        "Counts": 156, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "TPA", 
        "Counts": 276, 
        "UniqueCarrier": "NK"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ATL", 
        "Counts": 1, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ATL", 
        "Counts": 2, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ATL", 
        "Counts": 317, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 184, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 807, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "AUS", 
        "Counts": 298, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "AUS", 
        "Counts": 65, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "AUS", 
        "Counts": 482, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "AUS", 
        "Counts": 648, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "AUS", 
        "Counts": 54, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "AUS", 
        "Counts": 224, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "AUS", 
        "Counts": 365, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "AUS", 
        "Counts": 470, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "AUS", 
        "Counts": 234, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BNA", 
        "Counts": 2, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BNA", 
        "Counts": 12, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BNA", 
        "Counts": 376, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BNA", 
        "Counts": 300, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BNA", 
        "Counts": 446, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BNA", 
        "Counts": 1104, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BNA", 
        "Counts": 836, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BNA", 
        "Counts": 283, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "BOS", 
        "Counts": 12, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BOS", 
        "Counts": 42, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BWI", 
        "Counts": 131, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLE", 
        "Counts": 75, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLE", 
        "Counts": 208, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLE", 
        "Counts": 203, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLE", 
        "Counts": 52, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLE", 
        "Counts": 335, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLT", 
        "Counts": 423, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLT", 
        "Counts": 36, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLT", 
        "Counts": 200, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLT", 
        "Counts": 130, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLT", 
        "Counts": 481, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DCA", 
        "Counts": 1070, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DEN", 
        "Counts": 297, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DEN", 
        "Counts": 563, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DEN", 
        "Counts": 353, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DEN", 
        "Counts": 188, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DEN", 
        "Counts": 417, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DEN", 
        "Counts": 215, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 3, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DEN", 
        "Counts": 102, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DEN", 
        "Counts": 21, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 488, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DEN", 
        "Counts": 367, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 34, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DEN", 
        "Counts": 35, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DEN", 
        "Counts": 30, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DEN", 
        "Counts": 87, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 296, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DEN", 
        "Counts": 11, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DEN", 
        "Counts": 457, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DEN", 
        "Counts": 233, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DEN", 
        "Counts": 214, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 560, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 3, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DEN", 
        "Counts": 312, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DEN", 
        "Counts": 2552, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DEN", 
        "Counts": 477, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DEN", 
        "Counts": 55, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DEN", 
        "Counts": 454, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DFW", 
        "Counts": 256, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DFW", 
        "Counts": 59, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DFW", 
        "Counts": 190, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DFW", 
        "Counts": 654, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DFW", 
        "Counts": 514, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DFW", 
        "Counts": 818, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DFW", 
        "Counts": 314, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DFW", 
        "Counts": 889, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DFW", 
        "Counts": 344, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DTW", 
        "Counts": 37, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DTW", 
        "Counts": 304, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DTW", 
        "Counts": 95, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DTW", 
        "Counts": 35, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 4, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DTW", 
        "Counts": 29, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DTW", 
        "Counts": 18, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DTW", 
        "Counts": 270, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DTW", 
        "Counts": 839, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DTW", 
        "Counts": 25, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DTW", 
        "Counts": 161, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DTW", 
        "Counts": 608, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DTW", 
        "Counts": 4, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DTW", 
        "Counts": 78, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DTW", 
        "Counts": 6, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DTW", 
        "Counts": 99, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DTW", 
        "Counts": 37, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "EWR", 
        "Counts": 20, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "EWR", 
        "Counts": 59, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAD", 
        "Counts": 271, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAD", 
        "Counts": 136, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 394, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "IAH", 
        "Counts": 423, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "IAH", 
        "Counts": 196, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "IAH", 
        "Counts": 149, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAH", 
        "Counts": 145, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAH", 
        "Counts": 7, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAH", 
        "Counts": 412, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAH", 
        "Counts": 722, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "IAH", 
        "Counts": 185, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "IAH", 
        "Counts": 25, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAH", 
        "Counts": 956, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAH", 
        "Counts": 154, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAH", 
        "Counts": 204, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "IAH", 
        "Counts": 11, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAH", 
        "Counts": 45, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "IAH", 
        "Counts": 260, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "IAH", 
        "Counts": 53, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "IAH", 
        "Counts": 17, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "IAH", 
        "Counts": 431, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "IAH", 
        "Counts": 1463, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "IAH", 
        "Counts": 81, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAS", 
        "Counts": 18, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 728, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAS", 
        "Counts": 153, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 400, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAS", 
        "Counts": 44, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAX", 
        "Counts": 640, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAX", 
        "Counts": 509, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAX", 
        "Counts": 674, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 741, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAX", 
        "Counts": 684, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAX", 
        "Counts": 130, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 1601, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAX", 
        "Counts": 2773, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAX", 
        "Counts": 627, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 686, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 438, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAX", 
        "Counts": 115, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAX", 
        "Counts": 1051, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "LAX", 
        "Counts": 1464, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LGA", 
        "Counts": 537, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCI", 
        "Counts": 424, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCI", 
        "Counts": 24, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCI", 
        "Counts": 226, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCI", 
        "Counts": 177, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCI", 
        "Counts": 365, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MCI", 
        "Counts": 318, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MCI", 
        "Counts": 644, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MCI", 
        "Counts": 39, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MDW", 
        "Counts": 219, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MDW", 
        "Counts": 412, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MIA", 
        "Counts": 25, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MIA", 
        "Counts": 17, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MSP", 
        "Counts": 81, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MSP", 
        "Counts": 1118, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MSP", 
        "Counts": 165, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSP", 
        "Counts": 131, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 24, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSP", 
        "Counts": 431, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSP", 
        "Counts": 1, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSP", 
        "Counts": 59, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSP", 
        "Counts": 136, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSP", 
        "Counts": 910, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSP", 
        "Counts": 686, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSP", 
        "Counts": 177, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSP", 
        "Counts": 470, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MSP", 
        "Counts": 47, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 598, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MSP", 
        "Counts": 318, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSP", 
        "Counts": 88, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MSP", 
        "Counts": 27, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MSP", 
        "Counts": 49, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MSP", 
        "Counts": 153, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MSP", 
        "Counts": 797, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MSP", 
        "Counts": 1, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSP", 
        "Counts": 241, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSY", 
        "Counts": 22, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSY", 
        "Counts": 1, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSY", 
        "Counts": 185, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MSY", 
        "Counts": 47, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSY", 
        "Counts": 174, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MSY", 
        "Counts": 116, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "OAK", 
        "Counts": 130, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "OAK", 
        "Counts": 5, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "OAK", 
        "Counts": 349, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "OAK", 
        "Counts": 37, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 618, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ORD", 
        "Counts": 160, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ORD", 
        "Counts": 1110, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ORD", 
        "Counts": 42, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ORD", 
        "Counts": 131, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ORD", 
        "Counts": 274, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ORD", 
        "Counts": 542, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ORD", 
        "Counts": 1070, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ORD", 
        "Counts": 15, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ORD", 
        "Counts": 555, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ORD", 
        "Counts": 626, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ORD", 
        "Counts": 162, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ORD", 
        "Counts": 537, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ORD", 
        "Counts": 462, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ORD", 
        "Counts": 17, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 808, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ORD", 
        "Counts": 192, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 76, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ORD", 
        "Counts": 187, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ORD", 
        "Counts": 34, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ORD", 
        "Counts": 13, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ORD", 
        "Counts": 442, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ORD", 
        "Counts": 1506, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ORD", 
        "Counts": 391, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PDX", 
        "Counts": 365, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PDX", 
        "Counts": 82, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PDX", 
        "Counts": 315, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PDX", 
        "Counts": 318, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PDX", 
        "Counts": 318, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PDX", 
        "Counts": 1465, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PDX", 
        "Counts": 682, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PDX", 
        "Counts": 334, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PDX", 
        "Counts": 475, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PDX", 
        "Counts": 363, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHL", 
        "Counts": 4, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHL", 
        "Counts": 19, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHL", 
        "Counts": 88, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 68, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 224, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHX", 
        "Counts": 23, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 1614, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "PHX", 
        "Counts": 5, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "PHX", 
        "Counts": 33, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 958, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHX", 
        "Counts": 582, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHX", 
        "Counts": 772, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PIT", 
        "Counts": 12, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PIT", 
        "Counts": 40, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PIT", 
        "Counts": 250, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PIT", 
        "Counts": 65, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PIT", 
        "Counts": 196, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RDU", 
        "Counts": 458, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RDU", 
        "Counts": 6, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RDU", 
        "Counts": 61, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RDU", 
        "Counts": 49, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RDU", 
        "Counts": 26, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RSW", 
        "Counts": 17, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RSW", 
        "Counts": 13, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAN", 
        "Counts": 462, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAN", 
        "Counts": 2767, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAN", 
        "Counts": 245, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAN", 
        "Counts": 448, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SAN", 
        "Counts": 622, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAN", 
        "Counts": 364, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAT", 
        "Counts": 224, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SAT", 
        "Counts": 121, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAT", 
        "Counts": 321, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAT", 
        "Counts": 616, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SAT", 
        "Counts": 132, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAT", 
        "Counts": 487, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAT", 
        "Counts": 33, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAT", 
        "Counts": 200, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAT", 
        "Counts": 214, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 522, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SEA", 
        "Counts": 152, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 689, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SEA", 
        "Counts": 350, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SEA", 
        "Counts": 1466, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 961, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SEA", 
        "Counts": 243, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SEA", 
        "Counts": 870, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SEA", 
        "Counts": 659, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SEA", 
        "Counts": 903, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SEA", 
        "Counts": 918, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SEA", 
        "Counts": 5, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SFO", 
        "Counts": 335, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 2, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SFO", 
        "Counts": 953, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 381, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 863, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SFO", 
        "Counts": 643, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SFO", 
        "Counts": 656, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SFO", 
        "Counts": 677, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SFO", 
        "Counts": 477, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SFO", 
        "Counts": 674, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SFO", 
        "Counts": 135, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SFO", 
        "Counts": 841, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SFO", 
        "Counts": 1, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SFO", 
        "Counts": 2042, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SFO", 
        "Counts": 1785, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SFO", 
        "Counts": 1781, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SFO", 
        "Counts": 328, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SJC", 
        "Counts": 312, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SJC", 
        "Counts": 114, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SJC", 
        "Counts": 333, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SJC", 
        "Counts": 621, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SJC", 
        "Counts": 691, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SJC", 
        "Counts": 658, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SJC", 
        "Counts": 599, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SLC", 
        "Counts": 234, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SLC", 
        "Counts": 284, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SLC", 
        "Counts": 2637, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SLC", 
        "Counts": 331, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SLC", 
        "Counts": 1, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SLC", 
        "Counts": 1649, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SLC", 
        "Counts": 46, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SLC", 
        "Counts": 1027, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SLC", 
        "Counts": 39, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SLC", 
        "Counts": 3, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SLC", 
        "Counts": 117, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SLC", 
        "Counts": 37, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SLC", 
        "Counts": 1454, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SLC", 
        "Counts": 473, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SLC", 
        "Counts": 793, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SLC", 
        "Counts": 365, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SLC", 
        "Counts": 213, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SLC", 
        "Counts": 900, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SLC", 
        "Counts": 1833, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SLC", 
        "Counts": 688, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SLC", 
        "Counts": 860, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SLC", 
        "Counts": 951, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SLC", 
        "Counts": 322, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SMF", 
        "Counts": 478, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SMF", 
        "Counts": 1468, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SMF", 
        "Counts": 884, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SMF", 
        "Counts": 1785, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SMF", 
        "Counts": 890, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SNA", 
        "Counts": 51, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SNA", 
        "Counts": 5, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SNA", 
        "Counts": 1786, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SNA", 
        "Counts": 599, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SNA", 
        "Counts": 950, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "STL", 
        "Counts": 283, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "STL", 
        "Counts": 33, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "STL", 
        "Counts": 53, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "STL", 
        "Counts": 255, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "STL", 
        "Counts": 594, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "STL", 
        "Counts": 363, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "STL", 
        "Counts": 325, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "STL", 
        "Counts": 311, 
        "UniqueCarrier": "OO"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ATL", 
        "Counts": 806, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ATL", 
        "Counts": 1827, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ATL", 
        "Counts": 406, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 705, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 1184, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ATL", 
        "Counts": 640, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "AUS", 
        "Counts": 629, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "AUS", 
        "Counts": 579, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "AUS", 
        "Counts": 146, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "AUS", 
        "Counts": 1445, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "AUS", 
        "Counts": 60, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "AUS", 
        "Counts": 652, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "AUS", 
        "Counts": 961, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BNA", 
        "Counts": 290, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BNA", 
        "Counts": 330, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BNA", 
        "Counts": 330, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BNA", 
        "Counts": 582, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BNA", 
        "Counts": 241, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BOS", 
        "Counts": 2, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BOS", 
        "Counts": 1322, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BOS", 
        "Counts": 3051, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "BOS", 
        "Counts": 1175, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BOS", 
        "Counts": 1624, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BOS", 
        "Counts": 475, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BOS", 
        "Counts": 2541, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BOS", 
        "Counts": 2396, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BWI", 
        "Counts": 673, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BWI", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BWI", 
        "Counts": 640, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BWI", 
        "Counts": 303, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BWI", 
        "Counts": 1082, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BWI", 
        "Counts": 325, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "CLE", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLE", 
        "Counts": 788, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLE", 
        "Counts": 825, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "CLE", 
        "Counts": 98, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLE", 
        "Counts": 419, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLE", 
        "Counts": 125, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "CLE", 
        "Counts": 530, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLE", 
        "Counts": 365, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLE", 
        "Counts": 1856, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLE", 
        "Counts": 2, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLE", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLE", 
        "Counts": 99, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "CLE", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "CLE", 
        "Counts": 495, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLT", 
        "Counts": 290, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLT", 
        "Counts": 48, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "CLT", 
        "Counts": 2, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLT", 
        "Counts": 43, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLT", 
        "Counts": 642, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "CLT", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DCA", 
        "Counts": 2, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DCA", 
        "Counts": 365, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DCA", 
        "Counts": 2, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DCA", 
        "Counts": 1532, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DCA", 
        "Counts": 2140, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DCA", 
        "Counts": 365, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DEN", 
        "Counts": 842, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DEN", 
        "Counts": 504, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DEN", 
        "Counts": 308, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DEN", 
        "Counts": 1325, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DEN", 
        "Counts": 674, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DEN", 
        "Counts": 678, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DEN", 
        "Counts": 295, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DEN", 
        "Counts": 365, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DEN", 
        "Counts": 1349, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 667, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DEN", 
        "Counts": 2604, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DEN", 
        "Counts": 424, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DEN", 
        "Counts": 2494, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DEN", 
        "Counts": 3981, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DEN", 
        "Counts": 1575, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 2909, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DEN", 
        "Counts": 2015, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DEN", 
        "Counts": 560, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DEN", 
        "Counts": 1194, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DEN", 
        "Counts": 161, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 1237, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DEN", 
        "Counts": 544, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DEN", 
        "Counts": 3623, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DEN", 
        "Counts": 1446, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DEN", 
        "Counts": 682, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 1413, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DEN", 
        "Counts": 691, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DEN", 
        "Counts": 243, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DEN", 
        "Counts": 119, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DEN", 
        "Counts": 1093, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DEN", 
        "Counts": 544, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 1568, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 4542, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DEN", 
        "Counts": 884, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DEN", 
        "Counts": 428, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DEN", 
        "Counts": 962, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DEN", 
        "Counts": 1282, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DEN", 
        "Counts": 50, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DEN", 
        "Counts": 589, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DFW", 
        "Counts": 1071, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DFW", 
        "Counts": 689, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DFW", 
        "Counts": 189, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DFW", 
        "Counts": 1162, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DFW", 
        "Counts": 4, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DFW", 
        "Counts": 1124, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DFW", 
        "Counts": 430, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 668, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DTW", 
        "Counts": 65, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DTW", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DTW", 
        "Counts": 116, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DTW", 
        "Counts": 812, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "EWR", 
        "Counts": 1801, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "EWR", 
        "Counts": 711, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "EWR", 
        "Counts": 374, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "EWR", 
        "Counts": 3007, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "EWR", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "EWR", 
        "Counts": 1144, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "EWR", 
        "Counts": 46, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "EWR", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "EWR", 
        "Counts": 2478, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "EWR", 
        "Counts": 914, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "EWR", 
        "Counts": 65, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "EWR", 
        "Counts": 2312, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "EWR", 
        "Counts": 364, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "EWR", 
        "Counts": 408, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "EWR", 
        "Counts": 3572, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "EWR", 
        "Counts": 1999, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "EWR", 
        "Counts": 4456, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "EWR", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "EWR", 
        "Counts": 3289, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "EWR", 
        "Counts": 1676, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "EWR", 
        "Counts": 242, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "EWR", 
        "Counts": 831, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "EWR", 
        "Counts": 3142, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "EWR", 
        "Counts": 367, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "EWR", 
        "Counts": 915, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "EWR", 
        "Counts": 860, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "EWR", 
        "Counts": 1124, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "EWR", 
        "Counts": 1050, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "EWR", 
        "Counts": 284, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "EWR", 
        "Counts": 925, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "EWR", 
        "Counts": 5462, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "EWR", 
        "Counts": 16, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "EWR", 
        "Counts": 811, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "EWR", 
        "Counts": 62, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "EWR", 
        "Counts": 1892, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "FLL", 
        "Counts": 99, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "FLL", 
        "Counts": 426, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "FLL", 
        "Counts": 2308, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "FLL", 
        "Counts": 16, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "FLL", 
        "Counts": 1529, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "FLL", 
        "Counts": 735, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "FLL", 
        "Counts": 297, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "HNL", 
        "Counts": 365, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "HNL", 
        "Counts": 169, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HNL", 
        "Counts": 1514, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "HNL", 
        "Counts": 1858, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAD", 
        "Counts": 215, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "IAD", 
        "Counts": 114, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "IAD", 
        "Counts": 1177, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAD", 
        "Counts": 2533, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAD", 
        "Counts": 150, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAD", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "IAD", 
        "Counts": 401, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "IAD", 
        "Counts": 16, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "IAD", 
        "Counts": 169, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "IAD", 
        "Counts": 1173, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAD", 
        "Counts": 610, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAD", 
        "Counts": 2434, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAD", 
        "Counts": 1445, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAD", 
        "Counts": 5, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAD", 
        "Counts": 337, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAD", 
        "Counts": 1766, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "IAD", 
        "Counts": 309, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAD", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "IAD", 
        "Counts": 759, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "IAD", 
        "Counts": 980, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "IAD", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "IAD", 
        "Counts": 945, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "IAD", 
        "Counts": 3201, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "IAD", 
        "Counts": 274, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "IAD", 
        "Counts": 1052, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 606, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "IAH", 
        "Counts": 1373, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "IAH", 
        "Counts": 325, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "IAH", 
        "Counts": 1635, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "IAH", 
        "Counts": 633, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "IAH", 
        "Counts": 440, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAH", 
        "Counts": 45, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "IAH", 
        "Counts": 1527, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAH", 
        "Counts": 3788, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAH", 
        "Counts": 898, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAH", 
        "Counts": 116, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "IAH", 
        "Counts": 3533, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "IAH", 
        "Counts": 1532, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "IAH", 
        "Counts": 1464, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAH", 
        "Counts": 2175, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAH", 
        "Counts": 4080, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "IAH", 
        "Counts": 2488, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "IAH", 
        "Counts": 324, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAH", 
        "Counts": 2395, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "IAH", 
        "Counts": 1202, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAH", 
        "Counts": 254, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAH", 
        "Counts": 2290, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAH", 
        "Counts": 3727, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "IAH", 
        "Counts": 835, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "IAH", 
        "Counts": 1018, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAH", 
        "Counts": 1494, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "IAH", 
        "Counts": 23, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "IAH", 
        "Counts": 76, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "IAH", 
        "Counts": 540, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "IAH", 
        "Counts": 1752, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "IAH", 
        "Counts": 1711, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "IAH", 
        "Counts": 1786, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "IAH", 
        "Counts": 3463, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "IAH", 
        "Counts": 441, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "IAH", 
        "Counts": 346, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "IAH", 
        "Counts": 679, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "IAH", 
        "Counts": 1654, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "IAH", 
        "Counts": 1512, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAS", 
        "Counts": 125, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAS", 
        "Counts": 1583, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "LAS", 
        "Counts": 1981, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAS", 
        "Counts": 607, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAS", 
        "Counts": 2179, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 727, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAS", 
        "Counts": 1746, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 2767, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAX", 
        "Counts": 59, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAX", 
        "Counts": 482, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAX", 
        "Counts": 308, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAX", 
        "Counts": 531, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAX", 
        "Counts": 2563, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAX", 
        "Counts": 2, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "LAX", 
        "Counts": 4432, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAX", 
        "Counts": 1515, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAX", 
        "Counts": 2417, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAX", 
        "Counts": 4041, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 709, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAX", 
        "Counts": 386, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAX", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAX", 
        "Counts": 224, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAX", 
        "Counts": 4217, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 239, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAX", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAX", 
        "Counts": 61, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 6, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 4283, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LGA", 
        "Counts": 1987, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LGA", 
        "Counts": 2462, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LGA", 
        "Counts": 3879, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCI", 
        "Counts": 531, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCI", 
        "Counts": 382, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCI", 
        "Counts": 617, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MCI", 
        "Counts": 9, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCO", 
        "Counts": 1193, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCO", 
        "Counts": 3285, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MCO", 
        "Counts": 1470, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCO", 
        "Counts": 2399, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCO", 
        "Counts": 385, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCO", 
        "Counts": 2138, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MCO", 
        "Counts": 875, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MIA", 
        "Counts": 167, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MIA", 
        "Counts": 1687, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MIA", 
        "Counts": 1189, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MIA", 
        "Counts": 646, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MIA", 
        "Counts": 16, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 1223, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSP", 
        "Counts": 385, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSP", 
        "Counts": 5, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSP", 
        "Counts": 217, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSP", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 1980, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MSP", 
        "Counts": 94, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSY", 
        "Counts": 551, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSY", 
        "Counts": 813, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSY", 
        "Counts": 163, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSY", 
        "Counts": 2425, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSY", 
        "Counts": 224, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSY", 
        "Counts": 755, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MSY", 
        "Counts": 244, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 1460, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ORD", 
        "Counts": 636, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ORD", 
        "Counts": 526, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ORD", 
        "Counts": 2550, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ORD", 
        "Counts": 1082, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ORD", 
        "Counts": 1619, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ORD", 
        "Counts": 639, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ORD", 
        "Counts": 2142, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ORD", 
        "Counts": 3828, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ORD", 
        "Counts": 996, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ORD", 
        "Counts": 817, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ORD", 
        "Counts": 3572, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ORD", 
        "Counts": 727, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "ORD", 
        "Counts": 366, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ORD", 
        "Counts": 1654, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ORD", 
        "Counts": 3817, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ORD", 
        "Counts": 1725, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ORD", 
        "Counts": 3857, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ORD", 
        "Counts": 3830, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ORD", 
        "Counts": 646, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ORD", 
        "Counts": 2167, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ORD", 
        "Counts": 652, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 1921, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ORD", 
        "Counts": 707, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ORD", 
        "Counts": 1310, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 1602, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ORD", 
        "Counts": 1284, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ORD", 
        "Counts": 930, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ORD", 
        "Counts": 619, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ORD", 
        "Counts": 616, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ORD", 
        "Counts": 1299, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ORD", 
        "Counts": 247, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ORD", 
        "Counts": 1620, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ORD", 
        "Counts": 4893, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ORD", 
        "Counts": 637, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "ORD", 
        "Counts": 587, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "ORD", 
        "Counts": 1016, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ORD", 
        "Counts": 209, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ORD", 
        "Counts": 1127, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PDX", 
        "Counts": 1454, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PDX", 
        "Counts": 370, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "PDX", 
        "Counts": 309, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PDX", 
        "Counts": 840, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PDX", 
        "Counts": 1322, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PDX", 
        "Counts": 2029, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHL", 
        "Counts": 680, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHL", 
        "Counts": 1048, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 1588, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHL", 
        "Counts": 691, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHX", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 1461, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PHX", 
        "Counts": 923, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "PHX", 
        "Counts": 369, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHX", 
        "Counts": 1512, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 245, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHX", 
        "Counts": 1282, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHX", 
        "Counts": 907, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PIT", 
        "Counts": 690, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PIT", 
        "Counts": 73, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PIT", 
        "Counts": 879, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PIT", 
        "Counts": 298, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RDU", 
        "Counts": 248, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "RDU", 
        "Counts": 844, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "RDU", 
        "Counts": 757, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RDU", 
        "Counts": 78, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RDU", 
        "Counts": 629, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "RDU", 
        "Counts": 577, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RSW", 
        "Counts": 99, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RSW", 
        "Counts": 119, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "RSW", 
        "Counts": 1128, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RSW", 
        "Counts": 541, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RSW", 
        "Counts": 611, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAN", 
        "Counts": 1196, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SAN", 
        "Counts": 1050, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SAN", 
        "Counts": 983, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAN", 
        "Counts": 1382, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAN", 
        "Counts": 3, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAN", 
        "Counts": 1313, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAN", 
        "Counts": 2743, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAT", 
        "Counts": 359, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SAT", 
        "Counts": 249, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAT", 
        "Counts": 1715, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAT", 
        "Counts": 61, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAT", 
        "Counts": 533, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAT", 
        "Counts": 171, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 1561, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SEA", 
        "Counts": 931, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SEA", 
        "Counts": 962, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SEA", 
        "Counts": 1794, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SEA", 
        "Counts": 1618, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SEA", 
        "Counts": 2683, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SFO", 
        "Counts": 645, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SFO", 
        "Counts": 1078, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SFO", 
        "Counts": 241, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SFO", 
        "Counts": 2407, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SFO", 
        "Counts": 328, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "SFO", 
        "Counts": 493, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SFO", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SFO", 
        "Counts": 365, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 4483, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SFO", 
        "Counts": 368, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SFO", 
        "Counts": 5461, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SFO", 
        "Counts": 299, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SFO", 
        "Counts": 1858, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SFO", 
        "Counts": 2921, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SFO", 
        "Counts": 3420, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 2793, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 4209, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SFO", 
        "Counts": 9, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SFO", 
        "Counts": 874, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SFO", 
        "Counts": 17, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SFO", 
        "Counts": 251, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SFO", 
        "Counts": 244, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SFO", 
        "Counts": 4915, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SFO", 
        "Counts": 2058, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SFO", 
        "Counts": 706, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SFO", 
        "Counts": 996, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "SFO", 
        "Counts": 299, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "SFO", 
        "Counts": 577, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SFO", 
        "Counts": 2499, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SFO", 
        "Counts": 240, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SFO", 
        "Counts": 2699, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SFO", 
        "Counts": 346, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SFO", 
        "Counts": 845, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SFO", 
        "Counts": 335, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SJC", 
        "Counts": 882, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SJC", 
        "Counts": 441, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SLC", 
        "Counts": 570, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SLC", 
        "Counts": 16, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SLC", 
        "Counts": 315, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SLC", 
        "Counts": 674, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SLC", 
        "Counts": 199, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SMF", 
        "Counts": 951, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SMF", 
        "Counts": 275, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SMF", 
        "Counts": 677, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SMF", 
        "Counts": 596, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SNA", 
        "Counts": 1273, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SNA", 
        "Counts": 877, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SNA", 
        "Counts": 1596, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SNA", 
        "Counts": 1015, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SNA", 
        "Counts": 848, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "STL", 
        "Counts": 51, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "STL", 
        "Counts": 59, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "STL", 
        "Counts": 1, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "STL", 
        "Counts": 212, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "STL", 
        "Counts": 334, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "TPA", 
        "Counts": 585, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "TPA", 
        "Counts": 1907, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "TPA", 
        "Counts": 1060, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "TPA", 
        "Counts": 1507, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "TPA", 
        "Counts": 1114, 
        "UniqueCarrier": "UA"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "AUS", 
        "Counts": 682, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BOS", 
        "Counts": 811, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BOS", 
        "Counts": 1057, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DAL", 
        "Counts": 993, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DAL", 
        "Counts": 679, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DAL", 
        "Counts": 1121, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DAL", 
        "Counts": 1253, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DAL", 
        "Counts": 999, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DCA", 
        "Counts": 995, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DCA", 
        "Counts": 366, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 829, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "EWR", 
        "Counts": 1081, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "EWR", 
        "Counts": 1015, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "FLL", 
        "Counts": 176, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "FLL", 
        "Counts": 833, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "FLL", 
        "Counts": 479, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HNL", 
        "Counts": 241, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "HNL", 
        "Counts": 369, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAD", 
        "Counts": 734, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "IAD", 
        "Counts": 900, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "JFK", 
        "Counts": 176, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "JFK", 
        "Counts": 362, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "JFK", 
        "Counts": 2105, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "JFK", 
        "Counts": 1745, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LAS", 
        "Counts": 680, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAS", 
        "Counts": 362, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 1426, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 2538, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAX", 
        "Counts": 812, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LAX", 
        "Counts": 1118, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LAX", 
        "Counts": 2, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "LAX", 
        "Counts": 1080, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAX", 
        "Counts": 833, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAX", 
        "Counts": 241, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAX", 
        "Counts": 735, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAX", 
        "Counts": 2105, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 1437, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAX", 
        "Counts": 366, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAX", 
        "Counts": 666, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 955, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 3538, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LGA", 
        "Counts": 1252, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LGA", 
        "Counts": 1, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ORD", 
        "Counts": 666, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ORD", 
        "Counts": 843, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PDX", 
        "Counts": 857, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAN", 
        "Counts": 2026, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 966, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SEA", 
        "Counts": 1583, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SFO", 
        "Counts": 682, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SFO", 
        "Counts": 1058, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SFO", 
        "Counts": 1000, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SFO", 
        "Counts": 366, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 830, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SFO", 
        "Counts": 1016, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SFO", 
        "Counts": 480, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SFO", 
        "Counts": 369, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SFO", 
        "Counts": 900, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SFO", 
        "Counts": 1745, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 2525, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 3540, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SFO", 
        "Counts": 844, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SFO", 
        "Counts": 858, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SFO", 
        "Counts": 2024, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SFO", 
        "Counts": 1594, 
        "UniqueCarrier": "VX"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ATL", 
        "Counts": 706, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ATL", 
        "Counts": 1050, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ATL", 
        "Counts": 2190, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "ATL", 
        "Counts": 1712, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ATL", 
        "Counts": 1582, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ATL", 
        "Counts": 1372, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ATL", 
        "Counts": 1026, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ATL", 
        "Counts": 1805, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "ATL", 
        "Counts": 1768, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ATL", 
        "Counts": 595, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ATL", 
        "Counts": 1335, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ATL", 
        "Counts": 1051, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ATL", 
        "Counts": 1771, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ATL", 
        "Counts": 1038, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ATL", 
        "Counts": 2192, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "ATL", 
        "Counts": 2259, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ATL", 
        "Counts": 1014, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ATL", 
        "Counts": 1378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "ATL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ATL", 
        "Counts": 1020, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ATL", 
        "Counts": 727, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ATL", 
        "Counts": 711, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ATL", 
        "Counts": 1057, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ATL", 
        "Counts": 779, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ATL", 
        "Counts": 369, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ATL", 
        "Counts": 700, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ATL", 
        "Counts": 63, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ATL", 
        "Counts": 1117, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ATL", 
        "Counts": 2115, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "AUS", 
        "Counts": 710, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "AUS", 
        "Counts": 702, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "AUS", 
        "Counts": 352, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "AUS", 
        "Counts": 698, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "AUS", 
        "Counts": 3304, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "AUS", 
        "Counts": 1431, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "AUS", 
        "Counts": 653, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "AUS", 
        "Counts": 699, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "AUS", 
        "Counts": 1538, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "AUS", 
        "Counts": 1055, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "AUS", 
        "Counts": 679, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "AUS", 
        "Counts": 637, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "AUS", 
        "Counts": 984, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "AUS", 
        "Counts": 385, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "AUS", 
        "Counts": 357, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "AUS", 
        "Counts": 63, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "AUS", 
        "Counts": 1374, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "AUS", 
        "Counts": 689, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "AUS", 
        "Counts": 352, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "AUS", 
        "Counts": 659, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "AUS", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BNA", 
        "Counts": 710, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BNA", 
        "Counts": 914, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "BNA", 
        "Counts": 2036, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BNA", 
        "Counts": 889, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BNA", 
        "Counts": 147, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "BNA", 
        "Counts": 1100, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "BNA", 
        "Counts": 1067, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BNA", 
        "Counts": 1403, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BNA", 
        "Counts": 700, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BNA", 
        "Counts": 180, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BNA", 
        "Counts": 1094, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BNA", 
        "Counts": 1351, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BNA", 
        "Counts": 1041, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BNA", 
        "Counts": 885, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BNA", 
        "Counts": 1007, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "BNA", 
        "Counts": 1229, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BNA", 
        "Counts": 1449, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "BNA", 
        "Counts": 2314, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "BNA", 
        "Counts": 1124, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "BNA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BNA", 
        "Counts": 699, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BNA", 
        "Counts": 824, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BNA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BNA", 
        "Counts": 1052, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BNA", 
        "Counts": 125, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BNA", 
        "Counts": 419, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "BNA", 
        "Counts": 676, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BNA", 
        "Counts": 238, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "BNA", 
        "Counts": 689, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BNA", 
        "Counts": 1381, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BOS", 
        "Counts": 1027, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BOS", 
        "Counts": 352, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "BOS", 
        "Counts": 918, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "BOS", 
        "Counts": 3175, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BOS", 
        "Counts": 820, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BOS", 
        "Counts": 666, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "BOS", 
        "Counts": 622, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BOS", 
        "Counts": 7, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "BOS", 
        "Counts": 1618, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "BOS", 
        "Counts": 753, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BWI", 
        "Counts": 2191, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BWI", 
        "Counts": 691, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "BWI", 
        "Counts": 2039, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BWI", 
        "Counts": 3139, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BWI", 
        "Counts": 1165, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BWI", 
        "Counts": 712, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "BWI", 
        "Counts": 1389, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BWI", 
        "Counts": 1728, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BWI", 
        "Counts": 1076, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BWI", 
        "Counts": 3513, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BWI", 
        "Counts": 1171, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BWI", 
        "Counts": 1650, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BWI", 
        "Counts": 945, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "BWI", 
        "Counts": 867, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BWI", 
        "Counts": 3358, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "BWI", 
        "Counts": 2222, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BWI", 
        "Counts": 568, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "BWI", 
        "Counts": 993, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "BWI", 
        "Counts": 445, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "BWI", 
        "Counts": 63, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BWI", 
        "Counts": 1014, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BWI", 
        "Counts": 1070, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BWI", 
        "Counts": 2176, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BWI", 
        "Counts": 1391, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BWI", 
        "Counts": 808, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "BWI", 
        "Counts": 825, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BWI", 
        "Counts": 474, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "BWI", 
        "Counts": 56, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BWI", 
        "Counts": 424, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "BWI", 
        "Counts": 147, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "BWI", 
        "Counts": 1336, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BWI", 
        "Counts": 2435, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "CLE", 
        "Counts": 873, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "CLE", 
        "Counts": 1164, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLE", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLE", 
        "Counts": 428, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLE", 
        "Counts": 5, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "CLE", 
        "Counts": 1937, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLE", 
        "Counts": 400, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLE", 
        "Counts": 5, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "CLE", 
        "Counts": 210, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "CLT", 
        "Counts": 147, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "CLT", 
        "Counts": 712, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "CLT", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "CLT", 
        "Counts": 411, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "CLT", 
        "Counts": 690, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DAL", 
        "Counts": 1720, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DAL", 
        "Counts": 3293, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DAL", 
        "Counts": 1104, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DAL", 
        "Counts": 1388, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DAL", 
        "Counts": 1379, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DAL", 
        "Counts": 2390, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DAL", 
        "Counts": 367, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DAL", 
        "Counts": 916, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DAL", 
        "Counts": 6685, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DAL", 
        "Counts": 1767, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DAL", 
        "Counts": 1412, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DAL", 
        "Counts": 1416, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DAL", 
        "Counts": 2402, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DAL", 
        "Counts": 1205, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DAL", 
        "Counts": 2370, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DAL", 
        "Counts": 2472, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "DAL", 
        "Counts": 922, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DAL", 
        "Counts": 1856, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DAL", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DAL", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DAL", 
        "Counts": 14, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DAL", 
        "Counts": 1049, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DAL", 
        "Counts": 3410, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DAL", 
        "Counts": 370, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DAL", 
        "Counts": 664, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DAL", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DAL", 
        "Counts": 369, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DAL", 
        "Counts": 684, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DAL", 
        "Counts": 2077, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DAL", 
        "Counts": 754, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DCA", 
        "Counts": 1575, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DCA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DCA", 
        "Counts": 1069, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DCA", 
        "Counts": 1394, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DCA", 
        "Counts": 419, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DCA", 
        "Counts": 1299, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DCA", 
        "Counts": 855, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DCA", 
        "Counts": 695, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DCA", 
        "Counts": 2777, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DCA", 
        "Counts": 701, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DCA", 
        "Counts": 14, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DCA", 
        "Counts": 1077, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DCA", 
        "Counts": 723, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DEN", 
        "Counts": 1396, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DEN", 
        "Counts": 1459, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DEN", 
        "Counts": 1405, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DEN", 
        "Counts": 821, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DEN", 
        "Counts": 1706, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DEN", 
        "Counts": 2334, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 705, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DEN", 
        "Counts": 911, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DEN", 
        "Counts": 571, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DEN", 
        "Counts": 2036, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DEN", 
        "Counts": 1012, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DEN", 
        "Counts": 3144, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 2503, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DEN", 
        "Counts": 707, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DEN", 
        "Counts": 1919, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DEN", 
        "Counts": 1371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DEN", 
        "Counts": 3042, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 1723, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DEN", 
        "Counts": 718, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "DEN", 
        "Counts": 1574, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DEN", 
        "Counts": 1526, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DEN", 
        "Counts": 821, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 3498, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DEN", 
        "Counts": 431, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DEN", 
        "Counts": 653, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DEN", 
        "Counts": 7, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DEN", 
        "Counts": 2108, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DEN", 
        "Counts": 878, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 1585, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 1523, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DEN", 
        "Counts": 1236, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DEN", 
        "Counts": 2029, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DEN", 
        "Counts": 1413, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DEN", 
        "Counts": 1665, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DEN", 
        "Counts": 1611, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DEN", 
        "Counts": 793, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DTW", 
        "Counts": 1016, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DTW", 
        "Counts": 699, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DTW", 
        "Counts": 1061, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 693, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DTW", 
        "Counts": 10, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DTW", 
        "Counts": 1664, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DTW", 
        "Counts": 500, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DTW", 
        "Counts": 679, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "EWR", 
        "Counts": 622, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "EWR", 
        "Counts": 175, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "EWR", 
        "Counts": 903, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "EWR", 
        "Counts": 272, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "EWR", 
        "Counts": 264, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "EWR", 
        "Counts": 527, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "EWR", 
        "Counts": 2230, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "EWR", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "EWR", 
        "Counts": 634, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "FLL", 
        "Counts": 1795, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "FLL", 
        "Counts": 703, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "FLL", 
        "Counts": 1091, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "FLL", 
        "Counts": 3503, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "FLL", 
        "Counts": 904, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "FLL", 
        "Counts": 419, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "FLL", 
        "Counts": 572, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "FLL", 
        "Counts": 748, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "FLL", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "FLL", 
        "Counts": 426, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "FLL", 
        "Counts": 1209, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "FLL", 
        "Counts": 9, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "FLL", 
        "Counts": 648, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "FLL", 
        "Counts": 318, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "FLL", 
        "Counts": 270, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "FLL", 
        "Counts": 500, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "FLL", 
        "Counts": 287, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "FLL", 
        "Counts": 510, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "FLL", 
        "Counts": 1652, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "HOU", 
        "Counts": 1776, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "HOU", 
        "Counts": 1519, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "HOU", 
        "Counts": 1361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "HOU", 
        "Counts": 662, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "HOU", 
        "Counts": 1183, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "HOU", 
        "Counts": 412, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "HOU", 
        "Counts": 6699, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "HOU", 
        "Counts": 1296, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "HOU", 
        "Counts": 2050, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "HOU", 
        "Counts": 272, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "HOU", 
        "Counts": 751, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "HOU", 
        "Counts": 1495, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HOU", 
        "Counts": 1661, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "HOU", 
        "Counts": 976, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "HOU", 
        "Counts": 692, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "HOU", 
        "Counts": 1520, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "HOU", 
        "Counts": 2172, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "HOU", 
        "Counts": 3294, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "HOU", 
        "Counts": 718, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "HOU", 
        "Counts": 205, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "HOU", 
        "Counts": 1565, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "HOU", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "HOU", 
        "Counts": 385, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "HOU", 
        "Counts": 763, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "HOU", 
        "Counts": 1530, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "HOU", 
        "Counts": 246, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "HOU", 
        "Counts": 9, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "HOU", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "HOU", 
        "Counts": 1358, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "HOU", 
        "Counts": 1065, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAD", 
        "Counts": 594, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAD", 
        "Counts": 1014, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAD", 
        "Counts": 349, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAD", 
        "Counts": 56, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "IAD", 
        "Counts": 133, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "IAD", 
        "Counts": 60, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAS", 
        "Counts": 1327, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAS", 
        "Counts": 1072, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAS", 
        "Counts": 1044, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAS", 
        "Counts": 1653, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAS", 
        "Counts": 428, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LAS", 
        "Counts": 1775, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAS", 
        "Counts": 3174, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAS", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "LAS", 
        "Counts": 264, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAS", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "LAS", 
        "Counts": 1490, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAS", 
        "Counts": 349, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 3806, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAS", 
        "Counts": 1421, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAS", 
        "Counts": 735, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "LAS", 
        "Counts": 2986, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAS", 
        "Counts": 726, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAS", 
        "Counts": 3034, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAS", 
        "Counts": 1367, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAS", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAS", 
        "Counts": 3726, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LAS", 
        "Counts": 650, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LAS", 
        "Counts": 429, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAS", 
        "Counts": 3775, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAS", 
        "Counts": 1384, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAS", 
        "Counts": 1275, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 2243, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAS", 
        "Counts": 3053, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAS", 
        "Counts": 1906, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "LAS", 
        "Counts": 2758, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "LAS", 
        "Counts": 2412, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LAS", 
        "Counts": 1305, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LAS", 
        "Counts": 669, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAX", 
        "Counts": 1045, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAX", 
        "Counts": 673, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAX", 
        "Counts": 885, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAX", 
        "Counts": 950, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LAX", 
        "Counts": 1408, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAX", 
        "Counts": 2513, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "LAX", 
        "Counts": 1662, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 3816, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAX", 
        "Counts": 1011, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "LAX", 
        "Counts": 2001, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAX", 
        "Counts": 701, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAX", 
        "Counts": 4501, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAX", 
        "Counts": 689, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 3104, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LAX", 
        "Counts": 147, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAX", 
        "Counts": 687, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 3228, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAX", 
        "Counts": 3673, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAX", 
        "Counts": 1022, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "LAX", 
        "Counts": 2961, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LAX", 
        "Counts": 1002, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LGA", 
        "Counts": 1765, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LGA", 
        "Counts": 1001, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LGA", 
        "Counts": 1405, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LGA", 
        "Counts": 707, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "LGA", 
        "Counts": 969, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LGA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "LGA", 
        "Counts": 2398, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LGA", 
        "Counts": 1003, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCI", 
        "Counts": 1046, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MCI", 
        "Counts": 1235, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCI", 
        "Counts": 640, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MCI", 
        "Counts": 845, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MCI", 
        "Counts": 2415, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCI", 
        "Counts": 850, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCI", 
        "Counts": 1919, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MCI", 
        "Counts": 426, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MCI", 
        "Counts": 687, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MCI", 
        "Counts": 1416, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCI", 
        "Counts": 1000, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MCI", 
        "Counts": 969, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MCI", 
        "Counts": 2709, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCI", 
        "Counts": 658, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "MCI", 
        "Counts": 420, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MCI", 
        "Counts": 367, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MCI", 
        "Counts": 1177, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MCI", 
        "Counts": 50, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MCI", 
        "Counts": 518, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MCI", 
        "Counts": 56, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MCI", 
        "Counts": 214, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MCI", 
        "Counts": 1325, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MCI", 
        "Counts": 525, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCO", 
        "Counts": 2213, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MCO", 
        "Counts": 636, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MCO", 
        "Counts": 1459, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCO", 
        "Counts": 7, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MCO", 
        "Counts": 3358, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MCO", 
        "Counts": 5, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MCO", 
        "Counts": 1206, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCO", 
        "Counts": 695, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCO", 
        "Counts": 1361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCO", 
        "Counts": 10, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCO", 
        "Counts": 526, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MCO", 
        "Counts": 1554, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MCO", 
        "Counts": 56, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MCO", 
        "Counts": 733, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MCO", 
        "Counts": 969, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MCO", 
        "Counts": 2807, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCO", 
        "Counts": 5, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MCO", 
        "Counts": 1247, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCO", 
        "Counts": 1383, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MCO", 
        "Counts": 445, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MCO", 
        "Counts": 1524, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MCO", 
        "Counts": 951, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MCO", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MCO", 
        "Counts": 518, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MCO", 
        "Counts": 1427, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MDW", 
        "Counts": 2284, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MDW", 
        "Counts": 986, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MDW", 
        "Counts": 2329, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MDW", 
        "Counts": 1597, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MDW", 
        "Counts": 2228, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MDW", 
        "Counts": 1923, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MDW", 
        "Counts": 690, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MDW", 
        "Counts": 2371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MDW", 
        "Counts": 2768, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MDW", 
        "Counts": 3079, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MDW", 
        "Counts": 1634, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MDW", 
        "Counts": 2172, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MDW", 
        "Counts": 1202, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MDW", 
        "Counts": 2172, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MDW", 
        "Counts": 134, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MDW", 
        "Counts": 2990, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MDW", 
        "Counts": 2027, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MDW", 
        "Counts": 2378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MDW", 
        "Counts": 2714, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MDW", 
        "Counts": 2830, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MDW", 
        "Counts": 2429, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MDW", 
        "Counts": 953, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "MDW", 
        "Counts": 1129, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MDW", 
        "Counts": 772, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MDW", 
        "Counts": 1989, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MDW", 
        "Counts": 2497, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MDW", 
        "Counts": 1712, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MDW", 
        "Counts": 1179, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MDW", 
        "Counts": 1270, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MDW", 
        "Counts": 1327, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MDW", 
        "Counts": 758, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MDW", 
        "Counts": 1092, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MDW", 
        "Counts": 868, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "MDW", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MDW", 
        "Counts": 812, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "MDW", 
        "Counts": 452, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "MDW", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MDW", 
        "Counts": 2367, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MDW", 
        "Counts": 1625, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSP", 
        "Counts": 1007, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MSP", 
        "Counts": 568, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 1727, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSP", 
        "Counts": 9, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSP", 
        "Counts": 664, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSP", 
        "Counts": 5, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSP", 
        "Counts": 2435, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSP", 
        "Counts": 788, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MSP", 
        "Counts": 10, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSP", 
        "Counts": 859, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MSP", 
        "Counts": 11, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSY", 
        "Counts": 1367, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MSY", 
        "Counts": 385, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MSY", 
        "Counts": 1131, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MSY", 
        "Counts": 981, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MSY", 
        "Counts": 2468, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MSY", 
        "Counts": 701, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSY", 
        "Counts": 716, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSY", 
        "Counts": 646, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MSY", 
        "Counts": 3286, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MSY", 
        "Counts": 729, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSY", 
        "Counts": 708, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSY", 
        "Counts": 1252, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSY", 
        "Counts": 951, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "MSY", 
        "Counts": 369, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSY", 
        "Counts": 448, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MSY", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSY", 
        "Counts": 603, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MSY", 
        "Counts": 1069, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "OAK", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "OAK", 
        "Counts": 357, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "OAK", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "OAK", 
        "Counts": 445, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "OAK", 
        "Counts": 922, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "OAK", 
        "Counts": 1567, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "OAK", 
        "Counts": 719, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "OAK", 
        "Counts": 3051, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "OAK", 
        "Counts": 4488, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "OAK", 
        "Counts": 420, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "OAK", 
        "Counts": 1129, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "OAK", 
        "Counts": 368, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "OAK", 
        "Counts": 1962, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "OAK", 
        "Counts": 2002, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "OAK", 
        "Counts": 3881, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "OAK", 
        "Counts": 2131, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "OAK", 
        "Counts": 1042, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "OAK", 
        "Counts": 2702, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "OAK", 
        "Counts": 210, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PDX", 
        "Counts": 63, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PDX", 
        "Counts": 63, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PDX", 
        "Counts": 1524, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "PDX", 
        "Counts": 205, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PDX", 
        "Counts": 1365, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PDX", 
        "Counts": 690, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PDX", 
        "Counts": 367, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PDX", 
        "Counts": 771, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "PDX", 
        "Counts": 1965, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PDX", 
        "Counts": 1121, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PDX", 
        "Counts": 716, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PDX", 
        "Counts": 1338, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "PDX", 
        "Counts": 1773, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "PDX", 
        "Counts": 613, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PDX", 
        "Counts": 210, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHL", 
        "Counts": 1018, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHL", 
        "Counts": 694, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PHL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHL", 
        "Counts": 823, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHL", 
        "Counts": 308, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHL", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHL", 
        "Counts": 1381, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PHL", 
        "Counts": 2006, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PHL", 
        "Counts": 413, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHL", 
        "Counts": 679, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHL", 
        "Counts": 618, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHX", 
        "Counts": 728, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PHX", 
        "Counts": 1380, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHX", 
        "Counts": 825, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PHX", 
        "Counts": 1012, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHX", 
        "Counts": 400, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PHX", 
        "Counts": 1846, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 3509, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHX", 
        "Counts": 507, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PHX", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHX", 
        "Counts": 270, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "PHX", 
        "Counts": 1559, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHX", 
        "Counts": 3756, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 3083, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PHX", 
        "Counts": 1181, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHX", 
        "Counts": 443, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PHX", 
        "Counts": 2495, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHX", 
        "Counts": 790, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "PHX", 
        "Counts": 447, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "PHX", 
        "Counts": 1995, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHX", 
        "Counts": 1117, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PHX", 
        "Counts": 413, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "PHX", 
        "Counts": 378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "PHX", 
        "Counts": 302, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PHX", 
        "Counts": 3592, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "PHX", 
        "Counts": 1075, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 1276, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHX", 
        "Counts": 1652, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PHX", 
        "Counts": 1755, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHX", 
        "Counts": 2048, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "PHX", 
        "Counts": 1742, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "PHX", 
        "Counts": 2566, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHX", 
        "Counts": 1143, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHX", 
        "Counts": 457, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PIT", 
        "Counts": 706, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PIT", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PIT", 
        "Counts": 1073, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PIT", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PIT", 
        "Counts": 431, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PIT", 
        "Counts": 500, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "PIT", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PIT", 
        "Counts": 650, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PIT", 
        "Counts": 147, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PIT", 
        "Counts": 1522, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PIT", 
        "Counts": 1716, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PIT", 
        "Counts": 378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "PIT", 
        "Counts": 439, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PIT", 
        "Counts": 297, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PIT", 
        "Counts": 814, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RDU", 
        "Counts": 1049, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "RDU", 
        "Counts": 1046, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "RDU", 
        "Counts": 2175, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "RDU", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RDU", 
        "Counts": 653, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "RDU", 
        "Counts": 287, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "RDU", 
        "Counts": 385, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "RDU", 
        "Counts": 429, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "RDU", 
        "Counts": 952, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "RDU", 
        "Counts": 1185, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "RDU", 
        "Counts": 302, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "RDU", 
        "Counts": 561, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "RDU", 
        "Counts": 828, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RSW", 
        "Counts": 778, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "RSW", 
        "Counts": 125, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "RSW", 
        "Counts": 1376, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RSW", 
        "Counts": 5, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "RSW", 
        "Counts": 14, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "RSW", 
        "Counts": 14, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RSW", 
        "Counts": 7, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "RSW", 
        "Counts": 50, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "RSW", 
        "Counts": 1265, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RSW", 
        "Counts": 10, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "RSW", 
        "Counts": 436, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "RSW", 
        "Counts": 602, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAN", 
        "Counts": 369, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SAN", 
        "Counts": 690, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SAN", 
        "Counts": 419, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SAN", 
        "Counts": 807, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SAN", 
        "Counts": 1051, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAN", 
        "Counts": 2088, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SAN", 
        "Counts": 767, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SAN", 
        "Counts": 60, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SAN", 
        "Counts": 3762, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SAN", 
        "Counts": 516, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SAN", 
        "Counts": 1321, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SAN", 
        "Counts": 3879, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SAN", 
        "Counts": 713, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAN", 
        "Counts": 3641, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SAN", 
        "Counts": 687, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAN", 
        "Counts": 824, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAN", 
        "Counts": 2746, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SAN", 
        "Counts": 3378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SAN", 
        "Counts": 3145, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SAN", 
        "Counts": 324, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAT", 
        "Counts": 700, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SAT", 
        "Counts": 678, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SAT", 
        "Counts": 805, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SAT", 
        "Counts": 3443, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAT", 
        "Counts": 877, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SAT", 
        "Counts": 1519, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SAT", 
        "Counts": 1386, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAT", 
        "Counts": 688, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SAT", 
        "Counts": 56, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SAT", 
        "Counts": 517, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SAT", 
        "Counts": 745, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SAT", 
        "Counts": 362, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAT", 
        "Counts": 1065, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SAT", 
        "Counts": 689, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SAT", 
        "Counts": 672, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "SAT", 
        "Counts": 357, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SEA", 
        "Counts": 63, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SEA", 
        "Counts": 352, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SEA", 
        "Counts": 237, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SEA", 
        "Counts": 474, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SEA", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 1578, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SEA", 
        "Counts": 246, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SEA", 
        "Counts": 1284, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SEA", 
        "Counts": 214, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SEA", 
        "Counts": 1094, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SEA", 
        "Counts": 2126, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 1252, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SEA", 
        "Counts": 836, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SEA", 
        "Counts": 957, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SEA", 
        "Counts": 1178, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SEA", 
        "Counts": 648, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SEA", 
        "Counts": 259, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SFO", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 1522, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 2231, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 3248, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SFO", 
        "Counts": 868, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SFO", 
        "Counts": 1646, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SFO", 
        "Counts": 2737, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SFO", 
        "Counts": 1950, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SFO", 
        "Counts": 378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SJC", 
        "Counts": 671, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SJC", 
        "Counts": 56, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SJC", 
        "Counts": 664, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SJC", 
        "Counts": 1215, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SJC", 
        "Counts": 3053, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SJC", 
        "Counts": 3701, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SJC", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SJC", 
        "Counts": 1344, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SJC", 
        "Counts": 1758, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SJC", 
        "Counts": 3387, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SJC", 
        "Counts": 944, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SJC", 
        "Counts": 102, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SJC", 
        "Counts": 2958, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SLC", 
        "Counts": 423, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SLC", 
        "Counts": 371, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SLC", 
        "Counts": 2044, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SLC", 
        "Counts": 9, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SLC", 
        "Counts": 1901, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SLC", 
        "Counts": 1007, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SLC", 
        "Counts": 816, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SLC", 
        "Counts": 1042, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SLC", 
        "Counts": 2051, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SLC", 
        "Counts": 102, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SMF", 
        "Counts": 147, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SMF", 
        "Counts": 369, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SMF", 
        "Counts": 1412, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SMF", 
        "Counts": 2763, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SMF", 
        "Counts": 2986, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SMF", 
        "Counts": 454, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SMF", 
        "Counts": 1774, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SMF", 
        "Counts": 1742, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SMF", 
        "Counts": 3142, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SMF", 
        "Counts": 1185, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SMF", 
        "Counts": 2341, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SNA", 
        "Counts": 667, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SNA", 
        "Counts": 1623, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SNA", 
        "Counts": 2415, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SNA", 
        "Counts": 361, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SNA", 
        "Counts": 2710, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SNA", 
        "Counts": 613, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SNA", 
        "Counts": 2591, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SNA", 
        "Counts": 641, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SNA", 
        "Counts": 1942, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SNA", 
        "Counts": 2971, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SNA", 
        "Counts": 2366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "STL", 
        "Counts": 1119, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "STL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "STL", 
        "Counts": 689, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "STL", 
        "Counts": 773, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "STL", 
        "Counts": 1359, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "STL", 
        "Counts": 210, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "STL", 
        "Counts": 2083, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "STL", 
        "Counts": 1078, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "STL", 
        "Counts": 1618, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "STL", 
        "Counts": 663, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "STL", 
        "Counts": 649, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "STL", 
        "Counts": 510, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "STL", 
        "Counts": 1337, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "STL", 
        "Counts": 1312, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "STL", 
        "Counts": 973, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "STL", 
        "Counts": 994, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "STL", 
        "Counts": 1320, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "STL", 
        "Counts": 1430, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "STL", 
        "Counts": 2350, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "STL", 
        "Counts": 839, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "STL", 
        "Counts": 604, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "STL", 
        "Counts": 210, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "STL", 
        "Counts": 210, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "STL", 
        "Counts": 680, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "STL", 
        "Counts": 1146, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "STL", 
        "Counts": 297, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "STL", 
        "Counts": 563, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "STL", 
        "Counts": 600, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "STL", 
        "Counts": 324, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "STL", 
        "Counts": 677, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "STL", 
        "Counts": 259, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "STL", 
        "Counts": 378, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "STL", 
        "Counts": 366, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "STL", 
        "Counts": 771, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "TPA", 
        "Counts": 2109, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "TPA", 
        "Counts": 370, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "TPA", 
        "Counts": 1374, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "TPA", 
        "Counts": 2451, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "TPA", 
        "Counts": 755, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "TPA", 
        "Counts": 723, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "TPA", 
        "Counts": 795, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "TPA", 
        "Counts": 1637, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "TPA", 
        "Counts": 1061, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "TPA", 
        "Counts": 660, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "TPA", 
        "Counts": 525, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "TPA", 
        "Counts": 1636, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "TPA", 
        "Counts": 11, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "TPA", 
        "Counts": 1049, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "TPA", 
        "Counts": 617, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "TPA", 
        "Counts": 457, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "TPA", 
        "Counts": 816, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "TPA", 
        "Counts": 818, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "TPA", 
        "Counts": 357, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "STL", 
        "Origin": "TPA", 
        "Counts": 770, 
        "UniqueCarrier": "WN"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ATL", 
        "Counts": 3266, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ATL", 
        "Counts": 3823, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ATL", 
        "Counts": 5329, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ATL", 
        "Counts": 6422, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ATL", 
        "Counts": 3068, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ATL", 
        "Counts": 6848, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "ATL", 
        "Counts": 3408, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ATL", 
        "Counts": 6253, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ATL", 
        "Counts": 6001, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ATL", 
        "Counts": 7092, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ATL", 
        "Counts": 5630, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ATL", 
        "Counts": 5689, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ATL", 
        "Counts": 8046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "ATL", 
        "Counts": 367, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "ATL", 
        "Counts": 4014, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ATL", 
        "Counts": 3385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ATL", 
        "Counts": 4233, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "ATL", 
        "Counts": 2350, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ATL", 
        "Counts": 4846, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ATL", 
        "Counts": 6480, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ATL", 
        "Counts": 8099, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ATL", 
        "Counts": 3986, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ATL", 
        "Counts": 8992, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "ATL", 
        "Counts": 4842, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ATL", 
        "Counts": 5813, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ATL", 
        "Counts": 5155, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ATL", 
        "Counts": 6281, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "ATL", 
        "Counts": 420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "ATL", 
        "Counts": 7378, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ATL", 
        "Counts": 1285, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ATL", 
        "Counts": 6985, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ATL", 
        "Counts": 3732, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ATL", 
        "Counts": 3648, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ATL", 
        "Counts": 5394, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ATL", 
        "Counts": 4165, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ATL", 
        "Counts": 2281, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ATL", 
        "Counts": 3215, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ATL", 
        "Counts": 3199, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ATL", 
        "Counts": 3232, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "ATL", 
        "Counts": 513, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ATL", 
        "Counts": 2897, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "ATL", 
        "Counts": 624, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "ATL", 
        "Counts": 1046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ATL", 
        "Counts": 3964, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ATL", 
        "Counts": 7743, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "AUS", 
        "Counts": 3269, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "AUS", 
        "Counts": 702, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "AUS", 
        "Counts": 729, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "AUS", 
        "Counts": 698, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "AUS", 
        "Counts": 933, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "AUS", 
        "Counts": 3304, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "AUS", 
        "Counts": 2769, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "AUS", 
        "Counts": 4353, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "AUS", 
        "Counts": 473, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "AUS", 
        "Counts": 1232, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "AUS", 
        "Counts": 1077, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "AUS", 
        "Counts": 1538, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "AUS", 
        "Counts": 146, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "AUS", 
        "Counts": 2009, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "AUS", 
        "Counts": 1685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "AUS", 
        "Counts": 1349, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "AUS", 
        "Counts": 2911, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "AUS", 
        "Counts": 1129, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "AUS", 
        "Counts": 984, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "AUS", 
        "Counts": 335, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "AUS", 
        "Counts": 381, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "AUS", 
        "Counts": 385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "AUS", 
        "Counts": 357, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "AUS", 
        "Counts": 2181, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "AUS", 
        "Counts": 428, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "AUS", 
        "Counts": 490, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "AUS", 
        "Counts": 1742, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "AUS", 
        "Counts": 689, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "AUS", 
        "Counts": 912, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "AUS", 
        "Counts": 2113, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "AUS", 
        "Counts": 659, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "AUS", 
        "Counts": 665, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "AUS", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "AUS", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BNA", 
        "Counts": 3823, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BNA", 
        "Counts": 710, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BNA", 
        "Counts": 1398, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "BNA", 
        "Counts": 2036, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BNA", 
        "Counts": 889, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BNA", 
        "Counts": 1779, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "BNA", 
        "Counts": 1100, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "BNA", 
        "Counts": 1067, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BNA", 
        "Counts": 2418, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BNA", 
        "Counts": 2737, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BNA", 
        "Counts": 2420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BNA", 
        "Counts": 1463, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BNA", 
        "Counts": 1335, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BNA", 
        "Counts": 1351, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BNA", 
        "Counts": 1338, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BNA", 
        "Counts": 1152, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BNA", 
        "Counts": 2132, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BNA", 
        "Counts": 1342, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "BNA", 
        "Counts": 1229, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BNA", 
        "Counts": 1569, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "BNA", 
        "Counts": 2314, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "BNA", 
        "Counts": 99, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BNA", 
        "Counts": 1187, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "BNA", 
        "Counts": 1124, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "BNA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BNA", 
        "Counts": 1695, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BNA", 
        "Counts": 811, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BNA", 
        "Counts": 835, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BNA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BNA", 
        "Counts": 1052, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BNA", 
        "Counts": 125, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BNA", 
        "Counts": 419, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "BNA", 
        "Counts": 676, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BNA", 
        "Counts": 604, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BNA", 
        "Counts": 241, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BNA", 
        "Counts": 372, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "BNA", 
        "Counts": 689, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BNA", 
        "Counts": 1381, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BOS", 
        "Counts": 5306, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BOS", 
        "Counts": 729, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "BOS", 
        "Counts": 1402, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "BOS", 
        "Counts": 5625, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BOS", 
        "Counts": 2078, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BOS", 
        "Counts": 3868, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "BOS", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "BOS", 
        "Counts": 8460, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BOS", 
        "Counts": 2824, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BOS", 
        "Counts": 3383, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BOS", 
        "Counts": 3818, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BOS", 
        "Counts": 4710, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BOS", 
        "Counts": 2662, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BOS", 
        "Counts": 1032, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "BOS", 
        "Counts": 2196, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BOS", 
        "Counts": 1624, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "BOS", 
        "Counts": 5515, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BOS", 
        "Counts": 1207, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BOS", 
        "Counts": 4620, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "BOS", 
        "Counts": 6588, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "BOS", 
        "Counts": 622, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BOS", 
        "Counts": 3343, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "BOS", 
        "Counts": 1618, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "BOS", 
        "Counts": 2511, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BOS", 
        "Counts": 2140, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "BOS", 
        "Counts": 516, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "BOS", 
        "Counts": 98, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BOS", 
        "Counts": 7009, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "BOS", 
        "Counts": 564, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BOS", 
        "Counts": 5422, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BOS", 
        "Counts": 1540, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BOS", 
        "Counts": 1322, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BOS", 
        "Counts": 1706, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BOS", 
        "Counts": 1963, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BOS", 
        "Counts": 1040, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BOS", 
        "Counts": 1891, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BOS", 
        "Counts": 4510, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "BOS", 
        "Counts": 241, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BOS", 
        "Counts": 993, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "BOS", 
        "Counts": 61, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "BOS", 
        "Counts": 753, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BOS", 
        "Counts": 1440, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "BWI", 
        "Counts": 6423, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "BWI", 
        "Counts": 691, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "BWI", 
        "Counts": 2039, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "BWI", 
        "Counts": 5589, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "BWI", 
        "Counts": 1165, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "BWI", 
        "Counts": 3391, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "BWI", 
        "Counts": 1389, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "BWI", 
        "Counts": 2401, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "BWI", 
        "Counts": 1656, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "BWI", 
        "Counts": 2973, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "BWI", 
        "Counts": 198, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "BWI", 
        "Counts": 5191, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "BWI", 
        "Counts": 1171, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "BWI", 
        "Counts": 1010, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "BWI", 
        "Counts": 2016, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "BWI", 
        "Counts": 1947, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "BWI", 
        "Counts": 867, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "BWI", 
        "Counts": 4084, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "BWI", 
        "Counts": 2222, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "BWI", 
        "Counts": 957, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "BWI", 
        "Counts": 1925, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "BWI", 
        "Counts": 993, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "BWI", 
        "Counts": 445, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "BWI", 
        "Counts": 1959, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "BWI", 
        "Counts": 63, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "BWI", 
        "Counts": 2, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "BWI", 
        "Counts": 1816, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "BWI", 
        "Counts": 1070, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "BWI", 
        "Counts": 2176, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "BWI", 
        "Counts": 1454, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "BWI", 
        "Counts": 808, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "BWI", 
        "Counts": 825, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "BWI", 
        "Counts": 840, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "BWI", 
        "Counts": 325, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "BWI", 
        "Counts": 56, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "BWI", 
        "Counts": 1044, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "BWI", 
        "Counts": 147, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "BWI", 
        "Counts": 1336, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "BWI", 
        "Counts": 2487, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLE", 
        "Counts": 3068, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "CLE", 
        "Counts": 873, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLE", 
        "Counts": 2051, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "CLE", 
        "Counts": 1164, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "CLE", 
        "Counts": 1045, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "CLE", 
        "Counts": 1547, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLE", 
        "Counts": 1594, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "CLE", 
        "Counts": 1556, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLE", 
        "Counts": 1023, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLE", 
        "Counts": 1634, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "CLE", 
        "Counts": 831, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLE", 
        "Counts": 1367, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "CLE", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLE", 
        "Counts": 1273, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "CLE", 
        "Counts": 981, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLE", 
        "Counts": 2539, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLE", 
        "Counts": 1338, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "CLE", 
        "Counts": 1937, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLE", 
        "Counts": 969, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLE", 
        "Counts": 2931, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "CLE", 
        "Counts": 55, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLE", 
        "Counts": 160, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLE", 
        "Counts": 632, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "CLE", 
        "Counts": 381, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLE", 
        "Counts": 626, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "CLE", 
        "Counts": 73, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "CLE", 
        "Counts": 610, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "CLE", 
        "Counts": 398, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "CLE", 
        "Counts": 525, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "CLT", 
        "Counts": 6848, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "CLT", 
        "Counts": 933, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "CLT", 
        "Counts": 1781, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "CLT", 
        "Counts": 3869, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "CLT", 
        "Counts": 3392, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "CLT", 
        "Counts": 1046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "CLT", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "CLT", 
        "Counts": 2841, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "CLT", 
        "Counts": 2912, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "CLT", 
        "Counts": 4075, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "CLT", 
        "Counts": 3101, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "CLT", 
        "Counts": 3376, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "CLT", 
        "Counts": 2616, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "CLT", 
        "Counts": 411, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "CLT", 
        "Counts": 2, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "CLT", 
        "Counts": 2822, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "CLT", 
        "Counts": 2782, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "CLT", 
        "Counts": 1722, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "CLT", 
        "Counts": 2140, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "CLT", 
        "Counts": 4141, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "CLT", 
        "Counts": 1324, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "CLT", 
        "Counts": 3383, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "CLT", 
        "Counts": 690, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "CLT", 
        "Counts": 3047, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "CLT", 
        "Counts": 2369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "CLT", 
        "Counts": 1639, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "CLT", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "CLT", 
        "Counts": 4473, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "CLT", 
        "Counts": 318, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "CLT", 
        "Counts": 3552, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "CLT", 
        "Counts": 3100, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "CLT", 
        "Counts": 2431, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "CLT", 
        "Counts": 2690, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "CLT", 
        "Counts": 1786, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "CLT", 
        "Counts": 808, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "CLT", 
        "Counts": 715, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "CLT", 
        "Counts": 916, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "CLT", 
        "Counts": 1979, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "CLT", 
        "Counts": 83, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "CLT", 
        "Counts": 705, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "CLT", 
        "Counts": 288, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "CLT", 
        "Counts": 1308, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "CLT", 
        "Counts": 3127, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DAL", 
        "Counts": 3416, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DAL", 
        "Counts": 3293, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DAL", 
        "Counts": 1104, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DAL", 
        "Counts": 1388, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DAL", 
        "Counts": 2372, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DAL", 
        "Counts": 2390, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DAL", 
        "Counts": 367, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DAL", 
        "Counts": 916, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DAL", 
        "Counts": 6685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DAL", 
        "Counts": 2446, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DAL", 
        "Counts": 2533, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DAL", 
        "Counts": 2669, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DAL", 
        "Counts": 2402, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DAL", 
        "Counts": 1205, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DAL", 
        "Counts": 2370, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DAL", 
        "Counts": 2472, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "DAL", 
        "Counts": 922, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DAL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DAL", 
        "Counts": 1856, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DAL", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DAL", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DAL", 
        "Counts": 14, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DAL", 
        "Counts": 1049, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DAL", 
        "Counts": 3410, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DAL", 
        "Counts": 370, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DAL", 
        "Counts": 1365, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DAL", 
        "Counts": 664, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DAL", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DAL", 
        "Counts": 369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DAL", 
        "Counts": 684, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DAL", 
        "Counts": 2077, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DAL", 
        "Counts": 754, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DCA", 
        "Counts": 6249, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DCA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DCA", 
        "Counts": 1069, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DCA", 
        "Counts": 8449, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DCA", 
        "Counts": 1544, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DCA", 
        "Counts": 2912, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DCA", 
        "Counts": 2389, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DCA", 
        "Counts": 1460, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DCA", 
        "Counts": 3207, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DCA", 
        "Counts": 2128, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DCA", 
        "Counts": 2050, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DCA", 
        "Counts": 2876, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DCA", 
        "Counts": 1299, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DCA", 
        "Counts": 1532, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DCA", 
        "Counts": 847, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DCA", 
        "Counts": 359, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DCA", 
        "Counts": 1095, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DCA", 
        "Counts": 4013, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DCA", 
        "Counts": 888, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DCA", 
        "Counts": 4031, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DCA", 
        "Counts": 2777, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DCA", 
        "Counts": 3290, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DCA", 
        "Counts": 1859, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DCA", 
        "Counts": 745, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DCA", 
        "Counts": 5897, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DCA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DCA", 
        "Counts": 268, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DCA", 
        "Counts": 1079, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DCA", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DCA", 
        "Counts": 531, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DCA", 
        "Counts": 732, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DCA", 
        "Counts": 731, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DCA", 
        "Counts": 691, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DCA", 
        "Counts": 1077, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DCA", 
        "Counts": 2548, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DEN", 
        "Counts": 6042, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DEN", 
        "Counts": 2938, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DEN", 
        "Counts": 2415, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DEN", 
        "Counts": 2828, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DEN", 
        "Counts": 2380, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DEN", 
        "Counts": 1595, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DEN", 
        "Counts": 2912, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DEN", 
        "Counts": 2334, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DEN", 
        "Counts": 1461, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DEN", 
        "Counts": 6344, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DEN", 
        "Counts": 3247, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DEN", 
        "Counts": 3515, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DEN", 
        "Counts": 1361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "DEN", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DEN", 
        "Counts": 2036, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DEN", 
        "Counts": 3675, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DEN", 
        "Counts": 5145, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DEN", 
        "Counts": 1186, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DEN", 
        "Counts": 6805, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DEN", 
        "Counts": 7268, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DEN", 
        "Counts": 3730, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DEN", 
        "Counts": 3211, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DEN", 
        "Counts": 3430, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DEN", 
        "Counts": 3042, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DEN", 
        "Counts": 1395, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DEN", 
        "Counts": 6020, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DEN", 
        "Counts": 1564, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "DEN", 
        "Counts": 1574, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DEN", 
        "Counts": 6467, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DEN", 
        "Counts": 3933, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DEN", 
        "Counts": 2694, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DEN", 
        "Counts": 8174, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DEN", 
        "Counts": 1332, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DEN", 
        "Counts": 1554, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DEN", 
        "Counts": 294, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DEN", 
        "Counts": 4643, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DEN", 
        "Counts": 1868, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DEN", 
        "Counts": 6589, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DEN", 
        "Counts": 7925, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DEN", 
        "Counts": 2432, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DEN", 
        "Counts": 7182, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DEN", 
        "Counts": 2852, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DEN", 
        "Counts": 3714, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DEN", 
        "Counts": 2481, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DEN", 
        "Counts": 1872, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DFW", 
        "Counts": 7094, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DFW", 
        "Counts": 4355, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DFW", 
        "Counts": 2735, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DFW", 
        "Counts": 3289, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DFW", 
        "Counts": 1654, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DFW", 
        "Counts": 1555, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DFW", 
        "Counts": 4077, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DFW", 
        "Counts": 3194, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DFW", 
        "Counts": 6109, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "DFW", 
        "Counts": 2802, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DFW", 
        "Counts": 2498, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DFW", 
        "Counts": 2765, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "DFW", 
        "Counts": 748, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "DFW", 
        "Counts": 685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DFW", 
        "Counts": 1456, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DFW", 
        "Counts": 3571, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DFW", 
        "Counts": 493, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DFW", 
        "Counts": 4501, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DFW", 
        "Counts": 6824, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DFW", 
        "Counts": 4518, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DFW", 
        "Counts": 2468, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DFW", 
        "Counts": 4072, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DFW", 
        "Counts": 4128, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DFW", 
        "Counts": 3282, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DFW", 
        "Counts": 2676, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "DFW", 
        "Counts": 314, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DFW", 
        "Counts": 7966, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DFW", 
        "Counts": 2298, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DFW", 
        "Counts": 3587, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DFW", 
        "Counts": 4481, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DFW", 
        "Counts": 1385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DFW", 
        "Counts": 1797, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DFW", 
        "Counts": 1045, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DFW", 
        "Counts": 3533, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DFW", 
        "Counts": 4413, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DFW", 
        "Counts": 3961, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DFW", 
        "Counts": 4864, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "DFW", 
        "Counts": 1698, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DFW", 
        "Counts": 3261, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "DFW", 
        "Counts": 1483, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "DFW", 
        "Counts": 3024, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DFW", 
        "Counts": 2712, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DFW", 
        "Counts": 2591, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "DTW", 
        "Counts": 5617, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "DTW", 
        "Counts": 482, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "DTW", 
        "Counts": 2420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "DTW", 
        "Counts": 3812, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "DTW", 
        "Counts": 2959, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "DTW", 
        "Counts": 1004, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "DTW", 
        "Counts": 3094, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "DTW", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "DTW", 
        "Counts": 2132, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "DTW", 
        "Counts": 3237, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "DTW", 
        "Counts": 2717, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "DTW", 
        "Counts": 1590, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "DTW", 
        "Counts": 2982, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "DTW", 
        "Counts": 684, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "DTW", 
        "Counts": 1925, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "DTW", 
        "Counts": 392, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "DTW", 
        "Counts": 3256, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "DTW", 
        "Counts": 2299, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "DTW", 
        "Counts": 3598, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "DTW", 
        "Counts": 1617, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "DTW", 
        "Counts": 3277, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "DTW", 
        "Counts": 2603, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "DTW", 
        "Counts": 1329, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "DTW", 
        "Counts": 2952, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "DTW", 
        "Counts": 1161, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "DTW", 
        "Counts": 4046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "DTW", 
        "Counts": 233, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "DTW", 
        "Counts": 2386, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "DTW", 
        "Counts": 3096, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "DTW", 
        "Counts": 766, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "DTW", 
        "Counts": 908, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "DTW", 
        "Counts": 1805, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "DTW", 
        "Counts": 789, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "DTW", 
        "Counts": 351, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "DTW", 
        "Counts": 2196, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "DTW", 
        "Counts": 1421, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "DTW", 
        "Counts": 1517, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "DTW", 
        "Counts": 1671, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "DTW", 
        "Counts": 2255, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "EWR", 
        "Counts": 5676, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "EWR", 
        "Counts": 1333, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "EWR", 
        "Counts": 1472, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "EWR", 
        "Counts": 4688, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "EWR", 
        "Counts": 192, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "EWR", 
        "Counts": 1647, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "EWR", 
        "Counts": 3359, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "EWR", 
        "Counts": 2044, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "EWR", 
        "Counts": 3381, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "EWR", 
        "Counts": 2724, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "EWR", 
        "Counts": 1501, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "EWR", 
        "Counts": 4098, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "EWR", 
        "Counts": 364, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "EWR", 
        "Counts": 272, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "EWR", 
        "Counts": 411, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "EWR", 
        "Counts": 3574, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "EWR", 
        "Counts": 2263, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "EWR", 
        "Counts": 5537, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "EWR", 
        "Counts": 63, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "EWR", 
        "Counts": 6120, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "EWR", 
        "Counts": 2230, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "EWR", 
        "Counts": 3085, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "EWR", 
        "Counts": 918, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "EWR", 
        "Counts": 887, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "EWR", 
        "Counts": 4040, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "EWR", 
        "Counts": 419, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "EWR", 
        "Counts": 2363, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "EWR", 
        "Counts": 432, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "EWR", 
        "Counts": 981, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "EWR", 
        "Counts": 1793, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "EWR", 
        "Counts": 1091, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "EWR", 
        "Counts": 284, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "EWR", 
        "Counts": 1652, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "EWR", 
        "Counts": 6477, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "EWR", 
        "Counts": 388, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "EWR", 
        "Counts": 811, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "EWR", 
        "Counts": 2054, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "EWR", 
        "Counts": 2320, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "FLL", 
        "Counts": 8038, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "FLL", 
        "Counts": 1081, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "FLL", 
        "Counts": 1332, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "FLL", 
        "Counts": 2656, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "FLL", 
        "Counts": 5184, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "FLL", 
        "Counts": 831, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "FLL", 
        "Counts": 2616, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "FLL", 
        "Counts": 904, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "FLL", 
        "Counts": 2877, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "FLL", 
        "Counts": 1364, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "FLL", 
        "Counts": 2767, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "FLL", 
        "Counts": 2981, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "FLL", 
        "Counts": 4101, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "FLL", 
        "Counts": 748, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "FLL", 
        "Counts": 16, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "FLL", 
        "Counts": 1897, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "FLL", 
        "Counts": 4416, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "FLL", 
        "Counts": 1103, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "FLL", 
        "Counts": 1932, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "FLL", 
        "Counts": 5680, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "FLL", 
        "Counts": 426, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "FLL", 
        "Counts": 734, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "FLL", 
        "Counts": 1209, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "FLL", 
        "Counts": 638, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "FLL", 
        "Counts": 1108, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "FLL", 
        "Counts": 2572, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "FLL", 
        "Counts": 2757, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "FLL", 
        "Counts": 514, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "FLL", 
        "Counts": 866, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "FLL", 
        "Counts": 653, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "FLL", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "FLL", 
        "Counts": 197, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "FLL", 
        "Counts": 382, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "FLL", 
        "Counts": 1507, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "FLL", 
        "Counts": 510, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "FLL", 
        "Counts": 2176, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "HNL", 
        "Counts": 367, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "HNL", 
        "Counts": 748, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "HNL", 
        "Counts": 365, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "HNL", 
        "Counts": 169, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "HNL", 
        "Counts": 375, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "HNL", 
        "Counts": 889, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HNL", 
        "Counts": 5731, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "HNL", 
        "Counts": 131, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "HNL", 
        "Counts": 566, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "HNL", 
        "Counts": 780, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "HNL", 
        "Counts": 1208, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "HNL", 
        "Counts": 697, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "HNL", 
        "Counts": 1762, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "HNL", 
        "Counts": 2605, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "HNL", 
        "Counts": 609, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "HNL", 
        "Counts": 356, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "HNL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "HOU", 
        "Counts": 4022, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "HOU", 
        "Counts": 1519, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "HOU", 
        "Counts": 1361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "HOU", 
        "Counts": 1028, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "HOU", 
        "Counts": 1183, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "HOU", 
        "Counts": 412, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "HOU", 
        "Counts": 6699, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "HOU", 
        "Counts": 1296, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "HOU", 
        "Counts": 2050, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "HOU", 
        "Counts": 685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "HOU", 
        "Counts": 272, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "HOU", 
        "Counts": 751, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "HOU", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "HOU", 
        "Counts": 1495, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "HOU", 
        "Counts": 1661, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "HOU", 
        "Counts": 976, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "HOU", 
        "Counts": 692, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "HOU", 
        "Counts": 1520, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "HOU", 
        "Counts": 2172, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "HOU", 
        "Counts": 3294, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "HOU", 
        "Counts": 718, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "HOU", 
        "Counts": 205, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "HOU", 
        "Counts": 1565, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "HOU", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "HOU", 
        "Counts": 385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "HOU", 
        "Counts": 763, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "HOU", 
        "Counts": 1530, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "HOU", 
        "Counts": 246, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "HOU", 
        "Counts": 9, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "HOU", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "HOU", 
        "Counts": 1358, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "HOU", 
        "Counts": 1065, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAD", 
        "Counts": 3191, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "IAD", 
        "Counts": 114, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "IAD", 
        "Counts": 2198, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAD", 
        "Counts": 3716, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAD", 
        "Counts": 1416, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAD", 
        "Counts": 685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "IAD", 
        "Counts": 404, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "IAD", 
        "Counts": 16, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "IAD", 
        "Counts": 169, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "IAD", 
        "Counts": 1173, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "IAD", 
        "Counts": 1042, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAD", 
        "Counts": 959, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAD", 
        "Counts": 3897, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAD", 
        "Counts": 1836, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "IAD", 
        "Counts": 133, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "IAD", 
        "Counts": 665, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAD", 
        "Counts": 484, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAD", 
        "Counts": 337, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAD", 
        "Counts": 1818, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "IAD", 
        "Counts": 309, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAD", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "IAD", 
        "Counts": 759, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "IAD", 
        "Counts": 1040, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "IAD", 
        "Counts": 3, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "IAD", 
        "Counts": 1310, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "IAD", 
        "Counts": 4101, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "IAD", 
        "Counts": 274, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "IAD", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "IAD", 
        "Counts": 1052, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "IAH", 
        "Counts": 4395, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "IAH", 
        "Counts": 1875, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "IAH", 
        "Counts": 1150, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "IAH", 
        "Counts": 1635, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "IAH", 
        "Counts": 1007, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "IAH", 
        "Counts": 1458, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "IAH", 
        "Counts": 2754, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "IAH", 
        "Counts": 1527, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "IAH", 
        "Counts": 4859, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "IAH", 
        "Counts": 3533, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "IAH", 
        "Counts": 2009, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "IAH", 
        "Counts": 3535, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "IAH", 
        "Counts": 1898, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "IAH", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "IAH", 
        "Counts": 1464, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "IAH", 
        "Counts": 3246, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "IAH", 
        "Counts": 4794, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "IAH", 
        "Counts": 2493, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "IAH", 
        "Counts": 825, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "IAH", 
        "Counts": 2913, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "IAH", 
        "Counts": 3041, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "IAH", 
        "Counts": 1708, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "IAH", 
        "Counts": 2924, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "IAH", 
        "Counts": 210, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "IAH", 
        "Counts": 4612, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "IAH", 
        "Counts": 835, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "IAH", 
        "Counts": 1364, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "IAH", 
        "Counts": 2686, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "IAH", 
        "Counts": 322, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "IAH", 
        "Counts": 154, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "IAH", 
        "Counts": 572, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "IAH", 
        "Counts": 2118, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "IAH", 
        "Counts": 2216, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "IAH", 
        "Counts": 2337, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "IAH", 
        "Counts": 3698, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "IAH", 
        "Counts": 441, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "IAH", 
        "Counts": 2096, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "IAH", 
        "Counts": 679, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "IAH", 
        "Counts": 1654, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "IAH", 
        "Counts": 729, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "IAH", 
        "Counts": 1878, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "JFK", 
        "Counts": 2342, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "JFK", 
        "Counts": 1684, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "JFK", 
        "Counts": 5514, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "JFK", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "JFK", 
        "Counts": 2784, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "JFK", 
        "Counts": 846, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "JFK", 
        "Counts": 1185, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "JFK", 
        "Counts": 493, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "JFK", 
        "Counts": 379, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "JFK", 
        "Counts": 4428, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "JFK", 
        "Counts": 375, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "JFK", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "JFK", 
        "Counts": 1041, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "JFK", 
        "Counts": 4111, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "JFK", 
        "Counts": 12563, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "JFK", 
        "Counts": 5476, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "JFK", 
        "Counts": 3925, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "JFK", 
        "Counts": 1074, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "JFK", 
        "Counts": 1309, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "JFK", 
        "Counts": 312, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "JFK", 
        "Counts": 1601, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "JFK", 
        "Counts": 950, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "JFK", 
        "Counts": 5, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "JFK", 
        "Counts": 2603, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "JFK", 
        "Counts": 22, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "JFK", 
        "Counts": 1117, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "JFK", 
        "Counts": 1177, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "JFK", 
        "Counts": 2097, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "JFK", 
        "Counts": 347, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "JFK", 
        "Counts": 2680, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "JFK", 
        "Counts": 8080, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "JFK", 
        "Counts": 342, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "JFK", 
        "Counts": 2000, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "JFK", 
        "Counts": 331, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "JFK", 
        "Counts": 2659, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAS", 
        "Counts": 4830, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAS", 
        "Counts": 1364, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAS", 
        "Counts": 1155, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAS", 
        "Counts": 1208, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAS", 
        "Counts": 2019, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAS", 
        "Counts": 1275, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LAS", 
        "Counts": 1720, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LAS", 
        "Counts": 2455, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LAS", 
        "Counts": 357, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAS", 
        "Counts": 6841, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAS", 
        "Counts": 4500, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAS", 
        "Counts": 3256, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "LAS", 
        "Counts": 2245, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAS", 
        "Counts": 1102, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAS", 
        "Counts": 889, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "LAS", 
        "Counts": 1490, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAS", 
        "Counts": 956, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAS", 
        "Counts": 3245, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAS", 
        "Counts": 4111, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "LAS", 
        "Counts": 11481, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAS", 
        "Counts": 1787, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAS", 
        "Counts": 1205, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "LAS", 
        "Counts": 2986, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LAS", 
        "Counts": 1706, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAS", 
        "Counts": 2809, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAS", 
        "Counts": 1091, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAS", 
        "Counts": 3766, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAS", 
        "Counts": 4799, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAS", 
        "Counts": 2945, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAS", 
        "Counts": 2197, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAS", 
        "Counts": 5809, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LAS", 
        "Counts": 847, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LAS", 
        "Counts": 429, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAS", 
        "Counts": 4507, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAS", 
        "Counts": 1483, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAS", 
        "Counts": 6348, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAS", 
        "Counts": 9062, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAS", 
        "Counts": 3066, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAS", 
        "Counts": 4110, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "LAS", 
        "Counts": 2758, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "LAS", 
        "Counts": 2412, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LAS", 
        "Counts": 1666, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LAS", 
        "Counts": 780, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LAX", 
        "Counts": 6478, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "LAX", 
        "Counts": 2899, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LAX", 
        "Counts": 2133, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LAX", 
        "Counts": 4630, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "LAX", 
        "Counts": 1957, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LAX", 
        "Counts": 983, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LAX", 
        "Counts": 2139, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LAX", 
        "Counts": 2526, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LAX", 
        "Counts": 1097, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LAX", 
        "Counts": 6952, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LAX", 
        "Counts": 6844, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LAX", 
        "Counts": 2296, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "LAX", 
        "Counts": 5512, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LAX", 
        "Counts": 1929, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "LAX", 
        "Counts": 5733, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "LAX", 
        "Counts": 1662, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "LAX", 
        "Counts": 3881, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LAX", 
        "Counts": 4755, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "LAX", 
        "Counts": 12566, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LAX", 
        "Counts": 11497, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LAX", 
        "Counts": 1601, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LAX", 
        "Counts": 2964, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "LAX", 
        "Counts": 2001, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LAX", 
        "Counts": 3216, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LAX", 
        "Counts": 3885, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LAX", 
        "Counts": 2427, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "LAX", 
        "Counts": 6222, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LAX", 
        "Counts": 9239, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "LAX", 
        "Counts": 4847, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LAX", 
        "Counts": 2277, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "LAX", 
        "Counts": 7835, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LAX", 
        "Counts": 427, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LAX", 
        "Counts": 827, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "LAX", 
        "Counts": 3051, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "LAX", 
        "Counts": 1376, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "LAX", 
        "Counts": 10246, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "LAX", 
        "Counts": 17317, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "LAX", 
        "Counts": 5108, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "LAX", 
        "Counts": 5052, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "LAX", 
        "Counts": 4884, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LAX", 
        "Counts": 1772, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LAX", 
        "Counts": 574, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "LGA", 
        "Counts": 8094, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "LGA", 
        "Counts": 1253, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "LGA", 
        "Counts": 6605, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "LGA", 
        "Counts": 2532, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "LGA", 
        "Counts": 4191, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "LGA", 
        "Counts": 2657, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "LGA", 
        "Counts": 4005, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "LGA", 
        "Counts": 3705, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "LGA", 
        "Counts": 4518, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "LGA", 
        "Counts": 3605, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "LGA", 
        "Counts": 5672, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "LGA", 
        "Counts": 969, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "LGA", 
        "Counts": 2467, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "LGA", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "LGA", 
        "Counts": 519, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "LGA", 
        "Counts": 4386, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "LGA", 
        "Counts": 2398, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "LGA", 
        "Counts": 6421, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "LGA", 
        "Counts": 2372, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "LGA", 
        "Counts": 444, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "LGA", 
        "Counts": 10032, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "LGA", 
        "Counts": 862, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "LGA", 
        "Counts": 264, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "LGA", 
        "Counts": 751, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "LGA", 
        "Counts": 765, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "LGA", 
        "Counts": 1144, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "LGA", 
        "Counts": 1920, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCI", 
        "Counts": 3991, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MCI", 
        "Counts": 1235, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCI", 
        "Counts": 640, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MCI", 
        "Counts": 845, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MCI", 
        "Counts": 1324, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MCI", 
        "Counts": 2415, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCI", 
        "Counts": 884, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCI", 
        "Counts": 3241, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MCI", 
        "Counts": 2467, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCI", 
        "Counts": 1620, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCI", 
        "Counts": 77, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MCI", 
        "Counts": 426, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MCI", 
        "Counts": 687, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCI", 
        "Counts": 858, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MCI", 
        "Counts": 1782, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCI", 
        "Counts": 1591, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCI", 
        "Counts": 515, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MCI", 
        "Counts": 1231, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MCI", 
        "Counts": 2709, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MCI", 
        "Counts": 200, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCI", 
        "Counts": 2250, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "MCI", 
        "Counts": 420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCI", 
        "Counts": 1673, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MCI", 
        "Counts": 685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCI", 
        "Counts": 325, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MCI", 
        "Counts": 2273, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MCI", 
        "Counts": 50, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MCI", 
        "Counts": 518, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MCI", 
        "Counts": 56, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MCI", 
        "Counts": 800, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MCI", 
        "Counts": 653, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MCI", 
        "Counts": 704, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "MCI", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MCI", 
        "Counts": 1325, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MCI", 
        "Counts": 525, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MCO", 
        "Counts": 9011, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MCO", 
        "Counts": 1128, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MCO", 
        "Counts": 1579, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MCO", 
        "Counts": 3337, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MCO", 
        "Counts": 4083, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MCO", 
        "Counts": 1338, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MCO", 
        "Counts": 3385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MCO", 
        "Counts": 1206, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MCO", 
        "Counts": 4034, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MCO", 
        "Counts": 3420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MCO", 
        "Counts": 4041, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MCO", 
        "Counts": 3277, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MCO", 
        "Counts": 6112, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MCO", 
        "Counts": 734, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MCO", 
        "Counts": 1554, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MCO", 
        "Counts": 1860, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MCO", 
        "Counts": 2917, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MCO", 
        "Counts": 5471, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MCO", 
        "Counts": 1202, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MCO", 
        "Counts": 2966, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MCO", 
        "Counts": 4385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MCO", 
        "Counts": 1231, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MCO", 
        "Counts": 2807, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MCO", 
        "Counts": 3570, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MCO", 
        "Counts": 1836, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MCO", 
        "Counts": 1397, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MCO", 
        "Counts": 4974, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MCO", 
        "Counts": 5102, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MCO", 
        "Counts": 1357, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MCO", 
        "Counts": 1638, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MCO", 
        "Counts": 1526, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MCO", 
        "Counts": 691, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MCO", 
        "Counts": 518, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MCO", 
        "Counts": 785, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MCO", 
        "Counts": 1054, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MCO", 
        "Counts": 1405, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MCO", 
        "Counts": 1794, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MDW", 
        "Counts": 4867, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MDW", 
        "Counts": 986, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MDW", 
        "Counts": 2329, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MDW", 
        "Counts": 1597, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MDW", 
        "Counts": 2228, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MDW", 
        "Counts": 1923, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MDW", 
        "Counts": 690, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MDW", 
        "Counts": 2371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MDW", 
        "Counts": 2768, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MDW", 
        "Counts": 3079, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MDW", 
        "Counts": 2625, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MDW", 
        "Counts": 2172, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MDW", 
        "Counts": 1202, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MDW", 
        "Counts": 2172, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MDW", 
        "Counts": 134, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MDW", 
        "Counts": 2990, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MDW", 
        "Counts": 2027, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MDW", 
        "Counts": 2378, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MDW", 
        "Counts": 2714, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MDW", 
        "Counts": 2830, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MDW", 
        "Counts": 3041, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MDW", 
        "Counts": 953, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "MDW", 
        "Counts": 1129, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MDW", 
        "Counts": 772, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MDW", 
        "Counts": 1989, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MDW", 
        "Counts": 2497, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MDW", 
        "Counts": 1712, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MDW", 
        "Counts": 1179, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MDW", 
        "Counts": 1270, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MDW", 
        "Counts": 1327, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MDW", 
        "Counts": 758, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MDW", 
        "Counts": 1092, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MDW", 
        "Counts": 868, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "MDW", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MDW", 
        "Counts": 812, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "MDW", 
        "Counts": 452, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "MDW", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MDW", 
        "Counts": 2367, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MDW", 
        "Counts": 1625, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MIA", 
        "Counts": 5815, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MIA", 
        "Counts": 333, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MIA", 
        "Counts": 99, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MIA", 
        "Counts": 2513, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MIA", 
        "Counts": 957, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MIA", 
        "Counts": 3046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MIA", 
        "Counts": 3290, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MIA", 
        "Counts": 1400, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MIA", 
        "Counts": 4071, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MIA", 
        "Counts": 1330, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MIA", 
        "Counts": 3098, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MIA", 
        "Counts": 665, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MIA", 
        "Counts": 3032, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MIA", 
        "Counts": 3924, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MIA", 
        "Counts": 1705, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MIA", 
        "Counts": 3216, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MIA", 
        "Counts": 6478, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MIA", 
        "Counts": 199, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MIA", 
        "Counts": 3569, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MIA", 
        "Counts": 831, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MIA", 
        "Counts": 769, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MIA", 
        "Counts": 4280, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MIA", 
        "Counts": 2727, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MIA", 
        "Counts": 774, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MIA", 
        "Counts": 1071, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MIA", 
        "Counts": 448, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MIA", 
        "Counts": 314, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MIA", 
        "Counts": 370, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MIA", 
        "Counts": 1277, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MIA", 
        "Counts": 155, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MIA", 
        "Counts": 625, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MIA", 
        "Counts": 2065, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSP", 
        "Counts": 5149, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MSP", 
        "Counts": 369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MSP", 
        "Counts": 1288, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MSP", 
        "Counts": 2139, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MSP", 
        "Counts": 1923, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "MSP", 
        "Counts": 998, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSP", 
        "Counts": 2381, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MSP", 
        "Counts": 1858, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSP", 
        "Counts": 5998, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSP", 
        "Counts": 3254, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSP", 
        "Counts": 2955, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSP", 
        "Counts": 1080, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSP", 
        "Counts": 636, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "MSP", 
        "Counts": 131, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSP", 
        "Counts": 484, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSP", 
        "Counts": 1865, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MSP", 
        "Counts": 1073, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MSP", 
        "Counts": 2808, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSP", 
        "Counts": 3887, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSP", 
        "Counts": 2375, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSP", 
        "Counts": 2257, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSP", 
        "Counts": 1838, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSP", 
        "Counts": 3099, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MSP", 
        "Counts": 831, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "MSP", 
        "Counts": 451, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSP", 
        "Counts": 7532, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "MSP", 
        "Counts": 1772, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSP", 
        "Counts": 2486, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSP", 
        "Counts": 4301, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "MSP", 
        "Counts": 608, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "MSP", 
        "Counts": 518, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "MSP", 
        "Counts": 990, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MSP", 
        "Counts": 1200, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MSP", 
        "Counts": 215, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MSP", 
        "Counts": 3030, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MSP", 
        "Counts": 2797, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "MSP", 
        "Counts": 512, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MSP", 
        "Counts": 2006, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "MSP", 
        "Counts": 594, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "MSP", 
        "Counts": 1001, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSP", 
        "Counts": 2557, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MSP", 
        "Counts": 1118, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "MSY", 
        "Counts": 6269, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "MSY", 
        "Counts": 385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "MSY", 
        "Counts": 1131, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "MSY", 
        "Counts": 515, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "MSY", 
        "Counts": 981, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "MSY", 
        "Counts": 1589, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "MSY", 
        "Counts": 2468, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "MSY", 
        "Counts": 796, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "MSY", 
        "Counts": 1556, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "MSY", 
        "Counts": 2676, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "MSY", 
        "Counts": 1173, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "MSY", 
        "Counts": 889, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "MSY", 
        "Counts": 1106, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "MSY", 
        "Counts": 3286, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "MSY", 
        "Counts": 163, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "MSY", 
        "Counts": 3089, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "MSY", 
        "Counts": 1310, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "MSY", 
        "Counts": 1095, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "MSY", 
        "Counts": 2434, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "MSY", 
        "Counts": 434, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "MSY", 
        "Counts": 1403, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "MSY", 
        "Counts": 951, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "MSY", 
        "Counts": 770, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "MSY", 
        "Counts": 452, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "MSY", 
        "Counts": 369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "MSY", 
        "Counts": 1330, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "MSY", 
        "Counts": 706, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "MSY", 
        "Counts": 448, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "MSY", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "MSY", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "MSY", 
        "Counts": 376, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "MSY", 
        "Counts": 244, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "MSY", 
        "Counts": 349, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "MSY", 
        "Counts": 603, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "MSY", 
        "Counts": 1069, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "OAK", 
        "Counts": 420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "OAK", 
        "Counts": 357, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "OAK", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "OAK", 
        "Counts": 98, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "OAK", 
        "Counts": 445, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "OAK", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "OAK", 
        "Counts": 922, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "OAK", 
        "Counts": 1567, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "OAK", 
        "Counts": 314, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "OAK", 
        "Counts": 3, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "OAK", 
        "Counts": 565, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "OAK", 
        "Counts": 719, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "OAK", 
        "Counts": 210, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "OAK", 
        "Counts": 312, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "OAK", 
        "Counts": 3790, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "OAK", 
        "Counts": 6209, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "OAK", 
        "Counts": 420, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "OAK", 
        "Counts": 1129, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "OAK", 
        "Counts": 368, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "OAK", 
        "Counts": 314, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "OAK", 
        "Counts": 1962, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "OAK", 
        "Counts": 2830, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "OAK", 
        "Counts": 3881, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "OAK", 
        "Counts": 3568, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "OAK", 
        "Counts": 2113, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "OAK", 
        "Counts": 2702, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "OAK", 
        "Counts": 210, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "ORD", 
        "Counts": 7455, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "ORD", 
        "Counts": 2100, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "ORD", 
        "Counts": 1873, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "ORD", 
        "Counts": 7106, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "ORD", 
        "Counts": 1961, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "ORD", 
        "Counts": 2800, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "ORD", 
        "Counts": 4562, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "ORD", 
        "Counts": 5913, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "ORD", 
        "Counts": 6655, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "ORD", 
        "Counts": 7532, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "ORD", 
        "Counts": 4141, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "ORD", 
        "Counts": 4472, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "ORD", 
        "Counts": 2561, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "ORD", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "ORD", 
        "Counts": 1706, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "ORD", 
        "Counts": 4660, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "ORD", 
        "Counts": 1599, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "ORD", 
        "Counts": 4777, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "ORD", 
        "Counts": 8879, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "ORD", 
        "Counts": 9930, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "ORD", 
        "Counts": 1750, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "ORD", 
        "Counts": 4972, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "ORD", 
        "Counts": 4288, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "ORD", 
        "Counts": 7693, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "ORD", 
        "Counts": 1317, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "ORD", 
        "Counts": 314, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "ORD", 
        "Counts": 2583, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "ORD", 
        "Counts": 4978, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "ORD", 
        "Counts": 5000, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "ORD", 
        "Counts": 1342, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "ORD", 
        "Counts": 2155, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "ORD", 
        "Counts": 2138, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "ORD", 
        "Counts": 3161, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "ORD", 
        "Counts": 749, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "ORD", 
        "Counts": 4767, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "ORD", 
        "Counts": 8153, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "ORD", 
        "Counts": 701, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "ORD", 
        "Counts": 3031, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "ORD", 
        "Counts": 878, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "ORD", 
        "Counts": 2342, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "ORD", 
        "Counts": 2719, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "ORD", 
        "Counts": 2613, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PDX", 
        "Counts": 1285, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PDX", 
        "Counts": 428, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PDX", 
        "Counts": 564, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PDX", 
        "Counts": 63, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PDX", 
        "Counts": 55, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PDX", 
        "Counts": 315, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PDX", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PDX", 
        "Counts": 3933, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PDX", 
        "Counts": 2298, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PDX", 
        "Counts": 233, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PDX", 
        "Counts": 422, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PDX", 
        "Counts": 780, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "PDX", 
        "Counts": 205, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "PDX", 
        "Counts": 309, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PDX", 
        "Counts": 840, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PDX", 
        "Counts": 950, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PDX", 
        "Counts": 2943, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PDX", 
        "Counts": 4848, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PDX", 
        "Counts": 685, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PDX", 
        "Counts": 771, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PDX", 
        "Counts": 1771, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "PDX", 
        "Counts": 1965, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PDX", 
        "Counts": 2595, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PDX", 
        "Counts": 83, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PDX", 
        "Counts": 3183, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PDX", 
        "Counts": 1861, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PDX", 
        "Counts": 2245, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PDX", 
        "Counts": 5275, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PDX", 
        "Counts": 2914, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PDX", 
        "Counts": 2878, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "PDX", 
        "Counts": 1773, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "PDX", 
        "Counts": 1627, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PDX", 
        "Counts": 573, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHL", 
        "Counts": 6983, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PHL", 
        "Counts": 491, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHL", 
        "Counts": 806, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PHL", 
        "Counts": 5425, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PHL", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHL", 
        "Counts": 156, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PHL", 
        "Counts": 3197, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PHL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PHL", 
        "Counts": 284, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHL", 
        "Counts": 2699, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PHL", 
        "Counts": 3584, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHL", 
        "Counts": 2386, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHL", 
        "Counts": 2748, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHL", 
        "Counts": 1401, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PHL", 
        "Counts": 3, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHL", 
        "Counts": 2195, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHL", 
        "Counts": 2274, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "PHL", 
        "Counts": 909, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PHL", 
        "Counts": 325, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHL", 
        "Counts": 5101, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PHL", 
        "Counts": 2006, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "PHL", 
        "Counts": 2731, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHL", 
        "Counts": 2489, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "PHL", 
        "Counts": 706, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHL", 
        "Counts": 4956, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHL", 
        "Counts": 82, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PHL", 
        "Counts": 2637, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "PHL", 
        "Counts": 842, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "PHL", 
        "Counts": 1259, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "PHL", 
        "Counts": 1061, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PHL", 
        "Counts": 921, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "PHL", 
        "Counts": 98, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHL", 
        "Counts": 1015, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHL", 
        "Counts": 2243, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHL", 
        "Counts": 537, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHL", 
        "Counts": 799, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHL", 
        "Counts": 2478, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PHX", 
        "Counts": 3730, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "PHX", 
        "Counts": 1748, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PHX", 
        "Counts": 836, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PHX", 
        "Counts": 1543, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PHX", 
        "Counts": 1814, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "PHX", 
        "Counts": 633, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PHX", 
        "Counts": 3101, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PHX", 
        "Counts": 1846, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PHX", 
        "Counts": 1079, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PHX", 
        "Counts": 8158, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PHX", 
        "Counts": 4470, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PHX", 
        "Counts": 3101, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PHX", 
        "Counts": 2370, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PHX", 
        "Counts": 514, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "PHX", 
        "Counts": 1208, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "PHX", 
        "Counts": 1559, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "PHX", 
        "Counts": 369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PHX", 
        "Counts": 2684, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PHX", 
        "Counts": 2594, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PHX", 
        "Counts": 5839, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PHX", 
        "Counts": 7836, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "PHX", 
        "Counts": 2279, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PHX", 
        "Counts": 1356, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PHX", 
        "Counts": 2495, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "PHX", 
        "Counts": 774, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PHX", 
        "Counts": 4297, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "PHX", 
        "Counts": 447, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "PHX", 
        "Counts": 2823, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PHX", 
        "Counts": 4995, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "PHX", 
        "Counts": 3178, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PHX", 
        "Counts": 2636, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "PHX", 
        "Counts": 1073, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "PHX", 
        "Counts": 302, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "PHX", 
        "Counts": 5468, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "PHX", 
        "Counts": 1109, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "PHX", 
        "Counts": 6211, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PHX", 
        "Counts": 5092, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "PHX", 
        "Counts": 3503, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "PHX", 
        "Counts": 5508, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "PHX", 
        "Counts": 3581, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "PHX", 
        "Counts": 4349, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PHX", 
        "Counts": 2282, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PHX", 
        "Counts": 1064, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "PIT", 
        "Counts": 3644, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "PIT", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "PIT", 
        "Counts": 1322, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "PIT", 
        "Counts": 1073, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "PIT", 
        "Counts": 2356, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "PIT", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "PIT", 
        "Counts": 2, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "PIT", 
        "Counts": 1331, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "PIT", 
        "Counts": 1383, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "PIT", 
        "Counts": 643, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "PIT", 
        "Counts": 467, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "PIT", 
        "Counts": 866, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "PIT", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "PIT", 
        "Counts": 360, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "PIT", 
        "Counts": 24, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "PIT", 
        "Counts": 848, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "PIT", 
        "Counts": 425, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "PIT", 
        "Counts": 270, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "PIT", 
        "Counts": 1636, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "PIT", 
        "Counts": 1716, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "PIT", 
        "Counts": 723, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "PIT", 
        "Counts": 1267, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "PIT", 
        "Counts": 917, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "PIT", 
        "Counts": 1075, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "PIT", 
        "Counts": 439, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "PIT", 
        "Counts": 298, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "PIT", 
        "Counts": 297, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "PIT", 
        "Counts": 814, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RDU", 
        "Counts": 5386, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "RDU", 
        "Counts": 1046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "RDU", 
        "Counts": 1703, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "RDU", 
        "Counts": 2175, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RDU", 
        "Counts": 381, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "RDU", 
        "Counts": 2688, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "RDU", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RDU", 
        "Counts": 1562, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "RDU", 
        "Counts": 1797, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RDU", 
        "Counts": 939, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "RDU", 
        "Counts": 977, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "RDU", 
        "Counts": 653, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "RDU", 
        "Counts": 385, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "RDU", 
        "Counts": 757, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RDU", 
        "Counts": 159, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "RDU", 
        "Counts": 1106, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "RDU", 
        "Counts": 429, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "RDU", 
        "Counts": 828, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RDU", 
        "Counts": 686, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "RDU", 
        "Counts": 1527, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "RDU", 
        "Counts": 1185, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "RDU", 
        "Counts": 1071, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RDU", 
        "Counts": 585, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RDU", 
        "Counts": 2148, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "RDU", 
        "Counts": 1261, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "RDU", 
        "Counts": 302, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "RDU", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "RDU", 
        "Counts": 577, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "RDU", 
        "Counts": 284, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "RDU", 
        "Counts": 561, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "RDU", 
        "Counts": 828, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "RSW", 
        "Counts": 4164, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "RSW", 
        "Counts": 125, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "RSW", 
        "Counts": 1964, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "RSW", 
        "Counts": 1439, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "RSW", 
        "Counts": 627, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "RSW", 
        "Counts": 1786, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "RSW", 
        "Counts": 14, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "RSW", 
        "Counts": 532, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "RSW", 
        "Counts": 295, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "RSW", 
        "Counts": 1046, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "RSW", 
        "Counts": 1807, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "RSW", 
        "Counts": 1798, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "RSW", 
        "Counts": 573, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "RSW", 
        "Counts": 1175, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "RSW", 
        "Counts": 763, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "RSW", 
        "Counts": 50, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "RSW", 
        "Counts": 1265, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "RSW", 
        "Counts": 989, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "RSW", 
        "Counts": 2133, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "RSW", 
        "Counts": 1062, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "RSW", 
        "Counts": 436, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "RSW", 
        "Counts": 730, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAN", 
        "Counts": 2278, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SAN", 
        "Counts": 690, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SAN", 
        "Counts": 419, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SAN", 
        "Counts": 1039, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SAN", 
        "Counts": 807, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SAN", 
        "Counts": 808, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SAN", 
        "Counts": 1051, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAN", 
        "Counts": 4954, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SAN", 
        "Counts": 3533, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SAN", 
        "Counts": 791, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SAN", 
        "Counts": 1091, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SAN", 
        "Counts": 197, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SAN", 
        "Counts": 697, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SAN", 
        "Counts": 767, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SAN", 
        "Counts": 1043, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAN", 
        "Counts": 1748, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SAN", 
        "Counts": 2097, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SAN", 
        "Counts": 4494, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAN", 
        "Counts": 3044, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SAN", 
        "Counts": 516, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SAN", 
        "Counts": 692, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SAN", 
        "Counts": 1321, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SAN", 
        "Counts": 448, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SAN", 
        "Counts": 1200, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SAN", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SAN", 
        "Counts": 3879, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAN", 
        "Counts": 3176, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SAN", 
        "Counts": 1858, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SAN", 
        "Counts": 922, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAN", 
        "Counts": 5517, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SAN", 
        "Counts": 687, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAN", 
        "Counts": 3645, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAN", 
        "Counts": 7963, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SAN", 
        "Counts": 4000, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAN", 
        "Counts": 2484, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SAN", 
        "Counts": 3145, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SAN", 
        "Counts": 324, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SAT", 
        "Counts": 3215, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SAT", 
        "Counts": 678, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SAT", 
        "Counts": 805, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SAT", 
        "Counts": 715, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SAT", 
        "Counts": 3443, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SAT", 
        "Counts": 1692, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SAT", 
        "Counts": 4412, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SAT", 
        "Counts": 368, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SAT", 
        "Counts": 249, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SAT", 
        "Counts": 1519, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SAT", 
        "Counts": 2116, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SAT", 
        "Counts": 346, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SAT", 
        "Counts": 1485, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SAT", 
        "Counts": 1366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SAT", 
        "Counts": 56, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SAT", 
        "Counts": 517, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SAT", 
        "Counts": 745, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SAT", 
        "Counts": 315, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SAT", 
        "Counts": 201, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SAT", 
        "Counts": 362, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SAT", 
        "Counts": 1080, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SAT", 
        "Counts": 98, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SAT", 
        "Counts": 1099, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SAT", 
        "Counts": 689, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SAT", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SAT", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SAT", 
        "Counts": 621, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SAT", 
        "Counts": 672, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "SAT", 
        "Counts": 357, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SEA", 
        "Counts": 3190, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SEA", 
        "Counts": 912, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SEA", 
        "Counts": 603, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SEA", 
        "Counts": 1892, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SEA", 
        "Counts": 840, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "SEA", 
        "Counts": 72, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SEA", 
        "Counts": 916, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SEA", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SEA", 
        "Counts": 732, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SEA", 
        "Counts": 6540, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SEA", 
        "Counts": 3960, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SEA", 
        "Counts": 2196, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SEA", 
        "Counts": 1658, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SEA", 
        "Counts": 383, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SEA", 
        "Counts": 1761, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SEA", 
        "Counts": 246, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SEA", 
        "Counts": 1327, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SEA", 
        "Counts": 2345, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SEA", 
        "Counts": 2680, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SEA", 
        "Counts": 6354, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SEA", 
        "Counts": 10260, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SEA", 
        "Counts": 800, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SEA", 
        "Counts": 789, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SEA", 
        "Counts": 1094, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SEA", 
        "Counts": 369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SEA", 
        "Counts": 3033, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SEA", 
        "Counts": 376, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SEA", 
        "Counts": 3562, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SEA", 
        "Counts": 4762, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SEA", 
        "Counts": 2248, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SEA", 
        "Counts": 1015, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SEA", 
        "Counts": 6193, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SEA", 
        "Counts": 3655, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SEA", 
        "Counts": 8130, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SEA", 
        "Counts": 4000, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SEA", 
        "Counts": 4238, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SEA", 
        "Counts": 3967, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SEA", 
        "Counts": 3167, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SEA", 
        "Counts": 836, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "SEA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SFO", 
        "Counts": 3235, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SFO", 
        "Counts": 2095, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SFO", 
        "Counts": 241, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SFO", 
        "Counts": 4522, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SFO", 
        "Counts": 328, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "SFO", 
        "Counts": 608, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SFO", 
        "Counts": 1981, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SFO", 
        "Counts": 1366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SFO", 
        "Counts": 731, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SFO", 
        "Counts": 7869, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SFO", 
        "Counts": 4868, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SFO", 
        "Counts": 1421, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SFO", 
        "Counts": 6477, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "SFO", 
        "Counts": 1507, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SFO", 
        "Counts": 2605, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SFO", 
        "Counts": 3821, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SFO", 
        "Counts": 3655, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SFO", 
        "Counts": 8080, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SFO", 
        "Counts": 9038, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SFO", 
        "Counts": 17683, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SFO", 
        "Counts": 652, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SFO", 
        "Counts": 1051, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SFO", 
        "Counts": 868, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SFO", 
        "Counts": 1280, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SFO", 
        "Counts": 2811, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SFO", 
        "Counts": 244, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SFO", 
        "Counts": 8179, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SFO", 
        "Counts": 5301, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SFO", 
        "Counts": 2255, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SFO", 
        "Counts": 5070, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "SFO", 
        "Counts": 299, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "SFO", 
        "Counts": 577, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SFO", 
        "Counts": 7934, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SFO", 
        "Counts": 375, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SFO", 
        "Counts": 8129, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SFO", 
        "Counts": 1, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SFO", 
        "Counts": 3728, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SFO", 
        "Counts": 1785, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SFO", 
        "Counts": 4576, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SFO", 
        "Counts": 1041, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SJC", 
        "Counts": 514, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SJC", 
        "Counts": 671, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SJC", 
        "Counts": 241, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SJC", 
        "Counts": 56, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SJC", 
        "Counts": 84, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SJC", 
        "Counts": 664, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SJC", 
        "Counts": 2409, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SJC", 
        "Counts": 1696, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SJC", 
        "Counts": 610, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SJC", 
        "Counts": 441, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SJC", 
        "Counts": 343, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SJC", 
        "Counts": 3066, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SJC", 
        "Counts": 5136, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SJC", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SJC", 
        "Counts": 512, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SJC", 
        "Counts": 703, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SJC", 
        "Counts": 2919, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SJC", 
        "Counts": 3505, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SJC", 
        "Counts": 4008, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SJC", 
        "Counts": 4018, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SJC", 
        "Counts": 1718, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SJC", 
        "Counts": 3557, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SLC", 
        "Counts": 2887, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SLC", 
        "Counts": 667, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "SLC", 
        "Counts": 372, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SLC", 
        "Counts": 992, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SLC", 
        "Counts": 1044, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SLC", 
        "Counts": 705, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SLC", 
        "Counts": 371, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "SLC", 
        "Counts": 691, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SLC", 
        "Counts": 7421, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SLC", 
        "Counts": 3246, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "SLC", 
        "Counts": 1520, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SLC", 
        "Counts": 388, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SLC", 
        "Counts": 356, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SLC", 
        "Counts": 9, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SLC", 
        "Counts": 2261, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SLC", 
        "Counts": 1998, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SLC", 
        "Counts": 4108, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SLC", 
        "Counts": 5015, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SLC", 
        "Counts": 703, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "SLC", 
        "Counts": 1408, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SLC", 
        "Counts": 816, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "SLC", 
        "Counts": 156, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SLC", 
        "Counts": 2009, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "SLC", 
        "Counts": 350, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SLC", 
        "Counts": 2113, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SLC", 
        "Counts": 3013, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SLC", 
        "Counts": 2875, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "SLC", 
        "Counts": 536, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SLC", 
        "Counts": 5541, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "SLC", 
        "Counts": 284, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SLC", 
        "Counts": 2485, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "SLC", 
        "Counts": 622, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SLC", 
        "Counts": 4241, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SLC", 
        "Counts": 3367, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SLC", 
        "Counts": 1750, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SLC", 
        "Counts": 1638, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SLC", 
        "Counts": 1742, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SLC", 
        "Counts": 691, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SMF", 
        "Counts": 624, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "SMF", 
        "Counts": 61, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "SMF", 
        "Counts": 147, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "SMF", 
        "Counts": 287, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SMF", 
        "Counts": 369, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SMF", 
        "Counts": 2841, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SMF", 
        "Counts": 1483, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HNL", 
        "Origin": "SMF", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "SMF", 
        "Counts": 275, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SMF", 
        "Counts": 677, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "SMF", 
        "Counts": 331, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SMF", 
        "Counts": 2763, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "SMF", 
        "Counts": 4908, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SMF", 
        "Counts": 454, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SMF", 
        "Counts": 594, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SMF", 
        "Counts": 886, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SMF", 
        "Counts": 1774, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SMF", 
        "Counts": 3581, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "SMF", 
        "Counts": 3142, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SMF", 
        "Counts": 3940, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SMF", 
        "Counts": 1785, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SMF", 
        "Counts": 1673, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "SMF", 
        "Counts": 2341, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "SNA", 
        "Counts": 1047, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "SNA", 
        "Counts": 667, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "SNA", 
        "Counts": 3659, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "SNA", 
        "Counts": 3026, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "SNA", 
        "Counts": 877, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "SNA", 
        "Counts": 1596, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "SNA", 
        "Counts": 2415, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "SNA", 
        "Counts": 361, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "SNA", 
        "Counts": 1001, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "SNA", 
        "Counts": 2710, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "SNA", 
        "Counts": 2345, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "SNA", 
        "Counts": 1627, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "SNA", 
        "Counts": 4372, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "SNA", 
        "Counts": 3161, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "SNA", 
        "Counts": 4576, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SJC", 
        "Origin": "SNA", 
        "Counts": 3570, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "SNA", 
        "Counts": 1742, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SMF", 
        "Origin": "SNA", 
        "Counts": 2366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "SNA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "STL", 
        "Counts": 3967, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "STL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "STL", 
        "Counts": 689, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "STL", 
        "Counts": 773, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "STL", 
        "Counts": 1359, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "STL", 
        "Counts": 398, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "STL", 
        "Counts": 1308, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "STL", 
        "Counts": 2083, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "STL", 
        "Counts": 1078, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "STL", 
        "Counts": 2321, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "STL", 
        "Counts": 2716, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "STL", 
        "Counts": 1642, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "STL", 
        "Counts": 2087, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "STL", 
        "Counts": 510, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "STL", 
        "Counts": 1337, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "STL", 
        "Counts": 820, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "STL", 
        "Counts": 1678, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "STL", 
        "Counts": 1743, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "STL", 
        "Counts": 1135, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "STL", 
        "Counts": 1320, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCO", 
        "Origin": "STL", 
        "Counts": 1796, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "STL", 
        "Counts": 2350, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "STL", 
        "Counts": 625, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "STL", 
        "Counts": 2550, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "STL", 
        "Counts": 604, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "OAK", 
        "Origin": "STL", 
        "Counts": 210, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "STL", 
        "Counts": 2787, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PDX", 
        "Origin": "STL", 
        "Counts": 573, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "STL", 
        "Counts": 800, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "STL", 
        "Counts": 2287, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "STL", 
        "Counts": 297, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "STL", 
        "Counts": 563, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RSW", 
        "Origin": "STL", 
        "Counts": 728, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAN", 
        "Origin": "STL", 
        "Counts": 324, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "STL", 
        "Counts": 677, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "STL", 
        "Counts": 836, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SFO", 
        "Origin": "STL", 
        "Counts": 1037, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SLC", 
        "Origin": "STL", 
        "Counts": 691, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SNA", 
        "Origin": "STL", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "TPA", 
        "Origin": "STL", 
        "Counts": 875, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ATL", 
        "Origin": "TPA", 
        "Counts": 7736, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "AUS", 
        "Origin": "TPA", 
        "Counts": 370, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BNA", 
        "Origin": "TPA", 
        "Counts": 1374, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BOS", 
        "Origin": "TPA", 
        "Counts": 1442, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "BWI", 
        "Origin": "TPA", 
        "Counts": 2503, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLE", 
        "Origin": "TPA", 
        "Counts": 522, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "CLT", 
        "Origin": "TPA", 
        "Counts": 3180, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DAL", 
        "Origin": "TPA", 
        "Counts": 755, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DCA", 
        "Origin": "TPA", 
        "Counts": 2549, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DEN", 
        "Origin": "TPA", 
        "Counts": 1880, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DFW", 
        "Origin": "TPA", 
        "Counts": 2590, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "DTW", 
        "Origin": "TPA", 
        "Counts": 2256, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "EWR", 
        "Origin": "TPA", 
        "Counts": 2335, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "FLL", 
        "Origin": "TPA", 
        "Counts": 2159, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "HOU", 
        "Origin": "TPA", 
        "Counts": 1061, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAD", 
        "Origin": "TPA", 
        "Counts": 1060, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "IAH", 
        "Origin": "TPA", 
        "Counts": 1873, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "JFK", 
        "Origin": "TPA", 
        "Counts": 2660, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAS", 
        "Origin": "TPA", 
        "Counts": 772, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LAX", 
        "Origin": "TPA", 
        "Counts": 574, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "LGA", 
        "Origin": "TPA", 
        "Counts": 1917, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MCI", 
        "Origin": "TPA", 
        "Counts": 525, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MDW", 
        "Origin": "TPA", 
        "Counts": 1636, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MIA", 
        "Origin": "TPA", 
        "Counts": 2064, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSP", 
        "Origin": "TPA", 
        "Counts": 1120, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "MSY", 
        "Origin": "TPA", 
        "Counts": 1049, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "ORD", 
        "Origin": "TPA", 
        "Counts": 2602, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHL", 
        "Origin": "TPA", 
        "Counts": 2425, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PHX", 
        "Origin": "TPA", 
        "Counts": 1064, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "PIT", 
        "Origin": "TPA", 
        "Counts": 816, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "RDU", 
        "Origin": "TPA", 
        "Counts": 818, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SAT", 
        "Origin": "TPA", 
        "Counts": 357, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "SEA", 
        "Origin": "TPA", 
        "Counts": 366, 
        "UniqueCarrier": "all"
    }, 
    {
        "Dest": "STL", 
        "Origin": "TPA", 
        "Counts": 875, 
        "UniqueCarrier": "all"
    }
]