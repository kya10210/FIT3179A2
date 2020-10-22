{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "config":{"font":"Geneva"},
  "title":"Environmental Satisfaction in Europe 2013",
  "data": {
    "url": "https://raw.githubusercontent.com/kya10210/FIT3179A2/main/data/env_satisfaction_2013.csv"},
    
 "repeat": {
    "layer": ["prct_env_satis_high", "prct_env_satis_med","prct_env_satis_low"]
  },
  "spec": {
    "mark": {
    "type": "line",
    "point": true
  },
    "encoding": {
      "x": {
        "field": "country",
        "type": "nominal",
        "title": "Country"
      },
      "tooltip": [
      {"field": "country", "type": "nominal","title":"Country"},
      {"field": "prct_env_satis_high", "type": "quantitative","title":"High Satifaction (%)"},
      {"field": "prct_env_satis_med", "type": "quantitative","title":"Medium Satifaction (%)"},
      {"field": "prct_env_satis_low", "type": "quantitative","title":"Low Satifaction (%)"}

    ],
      "y": {
        "field": {"repeat": "layer"},
        "type": "quantitative",
        "title": "Percentage (%)"
      },
      "color": {
        "datum": {"repeat": "layer"},
        "type": "nominal"
      }
    }
  },
 "params": [
{
"name": "Country_selection", "bind": {
"input": "select", "options": [
null,
"Austria", "Belgium", "Bulgaria",
"Croatia", "Cyprus", "Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","United Kingdom"
], "labels":[
"Show All", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","United Kingdom"
],
"name": "Country Selection:" }
} ],
"transform": [
{"filter": "Country_selection == null || datum.country == Country_selection"}
]
}
