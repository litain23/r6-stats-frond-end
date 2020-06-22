from flask import abort, Flask, request, jsonify
from flask import Response
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


#CASUALPVP
@app.route('/api/v1/casualpvp/<string:platform>/<string:id>')
def casualpvp(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)
        
    return jsonify(
        {
            "death": 533,
            "kills": 521,
            "matchLost": 84,
            "matchWon": 102,
            "matchPlayed": 186,
            "timePlayed": 160986,
            "createdTime": "2020-05-19T10:53:14.4074346"
        }
    )

#CASUALPVPALL
@app.route('/api/v1/casualpvp/<string:platform>/<string:id>/all')
def casualpvpall(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)

    list = [{
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-11T20:00:52.073054"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-11T00:00:02"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-10T00:00:01"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-09T00:00:05"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-08T00:00:01"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-07T00:00:03"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-06T00:00:03"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-05T00:00:03"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-04T00:00:01"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-03T00:00:01"
    }, {
	"death": 537,
	"kills": 524,
	"matchLost": 85,
	"matchWon": 102,
	"matchPlayed": 187,
	"timePlayed": 161785,
	"createdTime": "2020-06-02T00:00:02"
    }]
    return Response(json.dumps(list),  mimetype='application/json')

#RANKPVPALL
@app.route('/api/v1/rankpvp/<string:platform>/<string:id>/all')
def rankpvpall(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)

    list = [{
        "death": 4765,
        "kills": 4784,
        "matchLost": 546,
        "matchWon": 586,
        "matchPlayed": 1132,
        "timePlayed": 1356790,
        "createdTime": "2020-06-11T20:03:08.048041"
        }, {
        "death": 4765,
        "kills": 4784,
        "matchLost": 546,
        "matchWon": 586,
        "matchPlayed": 1132,
        "timePlayed": 1356790,
        "createdTime": "2020-06-11T00:00:03"
        }, {
        "death": 4765,
        "kills": 4784,
        "matchLost": 546,
        "matchWon": 586,
        "matchPlayed": 1132,
        "timePlayed": 1356790,
        "createdTime": "2020-06-10T00:00:05"
        }, {
        "death": 4765,
        "kills": 4784,
        "matchLost": 546,
        "matchWon": 586,
        "matchPlayed": 1132,
        "timePlayed": 1356790,
        "createdTime": "2020-06-09T00:00:01"
        }, {
        "death": 4765,
        "kills": 4784,
        "matchLost": 546,
        "matchWon": 586,
        "matchPlayed": 1132,
        "timePlayed": 1356790,
        "createdTime": "2020-06-08T00:00:02"
        }, {
        "death": 4756,
        "kills": 4780,
        "matchLost": 545,
        "matchWon": 585,
        "matchPlayed": 1130,
        "timePlayed": 1354783,
        "createdTime": "2020-06-07T00:00:03"
        }, {
        "death": 4745,
        "kills": 4763,
        "matchLost": 545,
        "matchWon": 582,
        "matchPlayed": 1127,
        "timePlayed": 1351178,
        "createdTime": "2020-06-06T00:00:03"
        }, {
        "death": 4745,
        "kills": 4763,
        "matchLost": 545,
        "matchWon": 582,
        "matchPlayed": 1127,
        "timePlayed": 1351178,
        "createdTime": "2020-06-05T00:00:01"
        }, {
        "death": 4745,
        "kills": 4763,
        "matchLost": 545,
        "matchWon": 582,
        "matchPlayed": 1127,
        "timePlayed": 1351178,
        "createdTime": "2020-06-04T00:00:03"
        }, {
        "death": 4745,
        "kills": 4763,
        "matchLost": 545,
        "matchWon": 582,
        "matchPlayed": 1127,
        "timePlayed": 1351178,
        "createdTime": "2020-06-03T00:00:02"
        }, {
        "death": 4745,
        "kills": 4763,
        "matchLost": 545,
        "matchWon": 582,
        "matchPlayed": 1127,
        "timePlayed": 1351178,
        "createdTime": "2020-06-02T00:00:03"
    }]
    
    return Response(json.dumps(list),  mimetype='application/json')

#RANKPVP
@app.route('/api/v1/rankpvp/<string:platform>/<string:id>')
def rankpvp(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)

    return jsonify(
        {
            "death": 4724,
            "kills": 4746,
            "matchLost": 544,
            "matchWon": 579,
            "matchPlayed": 1123,
            "timePlayed": 1345360,
            "createdTime": "2020-05-19T11:04:04.5581463"
        }       
    )
    
@app.errorhandler(400)
def bad_request(e):
    return jsonify({
        "status": 400, "message": "Not found player id or platform"
        }), 400

@app.errorhandler(401)
def unauth(e):
     return jsonify({
            "message": "Full authentication is required to access this resource",
            "status": 401
        }), 401


@app.route('/api/v1/error/400')
def error_400():
    abort(400)

@app.route('/api/v1/error/401')
def error_401():
    abort(401)

#RANK
@app.route('/api/v1/rank/<string:platform>/<string:id>')
def rank(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)
    list = [
        {
            "region": "ncsa",
            "rankStat": {
            "maxMmr": 0,
            "death": 0,
            "rank": 0,
            "maxRank": 0,
            "kills": 0,
            "abandons": 0,
            "mmr": 2500,
            "wins": 0,
            "region": "ncsa",
            "season": 17,
            "losses": 0,
            "createdTime": "2020-06-18T10:45:56.6972031",
            "maxRankString": "UNRANK",
            "rankString": "UNRANK"
            }
        },
        {
            "region": "emea",
            "rankStat": {
            "maxMmr": 0,
            "death": 0,
            "rank": 0,
            "maxRank": 0,
            "kills": 0,
            "abandons": 0,
            "mmr": 2500,
            "wins": 0,
            "region": "emea",
            "season": 17,
            "losses": 0,
            "createdTime": "2020-06-18T10:45:56.2218817",
            "maxRankString": "UNRANK",
            "rankString": "UNRANK"
            }
        },
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 2581,
            "death": 1029,
            "rank": 15,
            "maxRank": 15,
            "kills": 1145,
            "abandons": 2,
            "mmr": 2501,
            "wins": 133,
            "region": "apac",
            "season": 17,
            "losses": 118,
            "createdTime": "2020-06-18T10:45:55.7489639",
            "maxRankString": "SILVER 1",
            "rankString": "SILVER 1"
            }
        }
    ]
    return Response(json.dumps(list),  mimetype='application/json')

#RANKALL
@app.route('/api/v1/rank/<string:platform>/<string:id>/all')
def rankall(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)

    list = [{
        "season": 17,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 2581,
            "death": 1029,
            "rank": 15,
            "maxRank": 15,
            "kills": 1145,
            "abandons": 2,
            "mmr": 2501,
            "wins": 133,
            "region": "apac",
            "season": 17,
            "losses": 118,
            "createdTime": "2020-06-18T10:43:17.8370249",
            "maxRankString": "SILVER 1",
            "rankString": "SILVER 1"
            }
        }
        ]
    },
    {
        "season": 16,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 2838,
            "death": 566,
            "rank": 13,
            "maxRank": 17,
            "kills": 570,
            "abandons": 0,
            "mmr": 2336,
            "wins": 70,
            "region": "apac",
            "season": 16,
            "losses": 66,
            "createdTime": "2020-06-18T10:43:17.836028",
            "maxRankString": "GOLD 2",
            "rankString": "SILVER 3"
            }
        }
        ]
    },
    {
        "season": 15,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 2568,
            "death": 811,
            "rank": 9,
            "maxRank": 15,
            "kills": 771,
            "abandons": 4,
            "mmr": 1902,
            "wins": 55,
            "region": "apac",
            "season": 15,
            "losses": 63,
            "createdTime": "2020-06-18T10:43:17.836028",
            "maxRankString": "SILVER 1",
            "rankString": "BRONZE 2"
            }
        }
        ]
    },
    {
        "season": 14,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 3345,
            "death": 282,
            "rank": 12,
            "maxRank": 17,
            "kills": 222,
            "abandons": 4,
            "mmr": 2459,
            "wins": 30,
            "region": "apac",
            "season": 14,
            "losses": 30,
            "createdTime": "2020-06-18T10:43:17.8350308",
            "maxRankString": "GOLD 2",
            "rankString": "SILVER 4"
            }
        }
        ]
    },
    {
        "season": 13,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 3125,
            "death": 0,
            "rank": 13,
            "maxRank": 16,
            "kills": 0,
            "abandons": 2,
            "mmr": 2637,
            "wins": 65,
            "region": "apac",
            "season": 13,
            "losses": 60,
            "createdTime": "2020-06-18T10:43:17.8340659",
            "maxRankString": "GOLD 3",
            "rankString": "SILVER 3"
            }
        }
        ]
    },
    {
        "season": 12,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 3121,
            "death": 0,
            "rank": 13,
            "maxRank": 16,
            "kills": 0,
            "abandons": 0,
            "mmr": 2655,
            "wins": 26,
            "region": "apac",
            "season": 12,
            "losses": 26,
            "createdTime": "2020-06-18T10:43:17.8340659",
            "maxRankString": "GOLD 3",
            "rankString": "SILVER 3"
            }
        }
        ]
    },
    {
        "season": 11,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 3337,
            "death": 0,
            "rank": 15,
            "maxRank": 17,
            "kills": 0,
            "abandons": 4,
            "mmr": 3008,
            "wins": 108,
            "region": "apac",
            "season": 11,
            "losses": 97,
            "createdTime": "2020-06-18T10:43:17.833037",
            "maxRankString": "GOLD 2",
            "rankString": "SILVER 1"
            }
        }
        ]
    },
    {
        "season": 10,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 2621,
            "death": 0,
            "rank": 9,
            "maxRank": 10,
            "kills": 0,
            "abandons": 6,
            "mmr": 2106,
            "wins": 132,
            "region": "apac",
            "season": 10,
            "losses": 119,
            "createdTime": "2020-06-18T10:43:17.8320414",
            "maxRankString": "BRONZE 1",
            "rankString": "BRONZE 2"
            }
        }
        ]
    },
    {
        "season": 9,
        "seasonData": [
        {
            "region": "apac",
            "rankStat": {
            "maxMmr": 2906,
            "death": 0,
            "rank": 10,
            "maxRank": 15,
            "kills": 0,
            "abandons": 1,
            "mmr": 2284,
            "wins": 20,
            "region": "apac",
            "season": 9,
            "losses": 23,
            "createdTime": "2020-06-18T10:43:17.8310438",
            "maxRankString": "SILVER 1",
            "rankString": "BRONZE 1"
            }
        }]
    }]
    return Response(json.dumps(list),  mimetype='application/json')

#GENERALPVP
@app.route('/api/v1/generalpvp/<string:platform>/<string:id>')
def general(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)

    return jsonify(
        {
            "matchLost": 633,
            "matchWon": 693,
            "matchPlayed": 1326,
            "kills": 5330,
            "death": 5327,
            "penetrationKills": 279,
            "meleeKills": 47,
            "killAssists": 1908,
            "headShot": 1913,
            "revive": 126,
            "bulletHit": 48833,
            "timePlayed": 1524749,
        }
    )

#OPERATORS
@app.route('/api/v1/operator/<string:platform>/<string:id>')
def operators(platform, id):
    if platform != "uplay" or id != "piliot": 
        abort(400)

    list = [{"name": "smoke", "operatorIndex": "2:1", "uniqueStatisticName": "operatorpvp_smoke_poisongaskill:2:1",
      "uniqueStatisticOasisId": 194660, "kills": 98, "death": 109, "headShot": 43, "meleeKills": 4, "totalXp": 289550,
      "timePlayed": 32991, "roundWon": 97, "roundLost": 68},
     {"name": "maverick", "operatorIndex": "2:10", "uniqueStatisticName": "operatorpvp_maverick_wallbreached:2:10",
      "uniqueStatisticOasisId": 293475, "kills": 74, "death": 91, "headShot": 29, "meleeKills": 1, "totalXp": 191160,
      "timePlayed": 23188, "roundWon": 52, "roundLost": 63},
     {"name": "nomad", "operatorIndex": "2:11", "uniqueStatisticName": "operatorpvp_nomad_airjabdetonate:2:11",
      "uniqueStatisticOasisId": 293935, "kills": 98, "death": 122, "headShot": 41, "meleeKills": 0, "totalXp": 270215,
      "timePlayed": 33077, "roundWon": 63, "roundLost": 97},
     {"name": "mozzie", "operatorIndex": "2:12", "uniqueStatisticName": "operatorpvp_mozzie_droneshacked:2:12",
      "uniqueStatisticOasisId": 298664, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "nakk", "operatorIndex": "2:13", "uniqueStatisticName": "operatorpvp_nokk_observationtooldeceived:2:13",
      "uniqueStatisticOasisId": 304013, "kills": 3, "death": 7, "headShot": 1, "meleeKills": 0, "totalXp": 7770,
      "timePlayed": 1398, "roundWon": 2, "roundLost": 5},
     {"name": "warden", "operatorIndex": "2:14", "uniqueStatisticName": "operatorpvp_warden_killswithglasses:2:14",
      "uniqueStatisticOasisId": 304018, "kills": 1, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 2600,
      "timePlayed": 134, "roundWon": 1, "roundLost": 0},
     {"name": "goyo", "operatorIndex": "2:15", "uniqueStatisticName": "operatorpvp_goyo_volcandetonate:2:15",
      "uniqueStatisticOasisId": 309864, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "amaru", "operatorIndex": "2:16", "uniqueStatisticName": "operatorpvp_amaru_distancereeled:2:16",
      "uniqueStatisticOasisId": 309863, "kills": 24, "death": 29, "headShot": 11, "meleeKills": 0, "totalXp": 62695,
      "timePlayed": 7402, "roundWon": 15, "roundLost": 22}, {"name": "kali", "operatorIndex": "2:17",
                                                             "uniqueStatisticName": "operatorpvp_kali_gadgetdestroywithexplosivelance:2:17",
                                                             "uniqueStatisticOasisId": 312718, "kills": 0, "death": 0,
                                                             "headShot": 0, "meleeKills": 0, "totalXp": 0,
                                                             "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "oryx", "operatorIndex": "2:18", "uniqueStatisticName": "operatorpvp_oryx_killsafterdash:2:18",
      "uniqueStatisticOasisId": 318856, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "iana", "operatorIndex": "2:19", "uniqueStatisticName": "operatorpvp_iana_killsafterreplicator:2:19",
      "uniqueStatisticOasisId": 318857, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "castle", "operatorIndex": "2:2", "uniqueStatisticName": "operatorpvp_castle_kevlarbarricadedeployed:2:2",
      "uniqueStatisticOasisId": 194663, "kills": 30, "death": 35, "headShot": 3, "meleeKills": 0, "totalXp": 112580,
      "timePlayed": 9874, "roundWon": 30, "roundLost": 17},
     {"name": "doc", "operatorIndex": "2:3", "uniqueStatisticName": "operatorpvp_doc_teammaterevive:2:3",
      "uniqueStatisticOasisId": 194666, "kills": 103, "death": 84, "headShot": 49, "meleeKills": 2, "totalXp": 273575,
      "timePlayed": 23018, "roundWon": 67, "roundLost": 49},
     {"name": "glaz", "operatorIndex": "2:4", "uniqueStatisticName": "operatorpvp_glaz_sniperkill:2:4",
      "uniqueStatisticOasisId": 194689, "kills": 78, "death": 98, "headShot": 35, "meleeKills": 0, "totalXp": 255500,
      "timePlayed": 30910, "roundWon": 84, "roundLost": 65},
     {"name": "blitz", "operatorIndex": "2:5", "uniqueStatisticName": "operatorpvp_blitz_flashedenemy:2:5",
      "uniqueStatisticOasisId": 195161, "kills": 20, "death": 28, "headShot": 5, "meleeKills": 4, "totalXp": 63850,
      "timePlayed": 6736, "roundWon": 19, "roundLost": 18},
     {"name": "buck", "operatorIndex": "2:6", "uniqueStatisticName": "operatorpvp_buck_kill:2:6",
      "uniqueStatisticOasisId": 200102, "kills": 36, "death": 53, "headShot": 13, "meleeKills": 0, "totalXp": 128630,
      "timePlayed": 14621, "roundWon": 36, "roundLost": 39}, {"name": "blackbeard", "operatorIndex": "2:7",
                                                              "uniqueStatisticName": "operatorpvp_blackbeard_gunshieldblockdamage:2:7",
                                                              "uniqueStatisticOasisId": 202310, "kills": 53,
                                                              "death": 43, "headShot": 18, "meleeKills": 0,
                                                              "totalXp": 117154, "timePlayed": 12812, "roundWon": 29,
                                                              "roundLost": 35},
     {"name": "capitao", "operatorIndex": "2:8", "uniqueStatisticName": "operatorpvp_capitao_lethaldartkills:2:8",
      "uniqueStatisticOasisId": 207946, "kills": 140, "death": 176, "headShot": 56, "meleeKills": 0, "totalXp": 409025,
      "timePlayed": 45158, "roundWon": 92, "roundLost": 133},
     {"name": "hibana", "operatorIndex": "2:9", "uniqueStatisticName": "operatorpvp_hibana_detonate_projectile:2:9",
      "uniqueStatisticOasisId": 217323, "kills": 14, "death": 24, "headShot": 8, "meleeKills": 0, "totalXp": 38543,
      "timePlayed": 5954, "roundWon": 10, "roundLost": 18},
     {"name": "jackal", "operatorIndex": "2:A", "uniqueStatisticName": "operatorpvp_cazador_assist_kill:2:A",
      "uniqueStatisticOasisId": 229326, "kills": 1, "death": 2, "headShot": 0, "meleeKills": 0, "totalXp": 2600,
      "timePlayed": 386, "roundWon": 1, "roundLost": 1},
     {"name": "ying", "operatorIndex": "2:B", "uniqueStatisticName": "operatorpvp_dazzler_gadget_detonate:2:B",
      "uniqueStatisticOasisId": 243475, "kills": 11, "death": 8, "headShot": 1, "meleeKills": 1, "totalXp": 24950,
      "timePlayed": 2408, "roundWon": 6, "roundLost": 6},
     {"name": "ela", "operatorIndex": "2:C", "uniqueStatisticName": "operatorpvp_concussionmine_detonate:2:C",
      "uniqueStatisticOasisId": 254989, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "dokkaebi", "operatorIndex": "2:D", "uniqueStatisticName": "operatorpvp_phoneshacked:2:D",
      "uniqueStatisticOasisId": 283005, "kills": 87, "death": 96, "headShot": 34, "meleeKills": 0, "totalXp": 252185,
      "timePlayed": 26540, "roundWon": 50, "roundLost": 78},
     {"name": "maestro", "operatorIndex": "2:F", "uniqueStatisticName": "operatorpvp_barrage_killswithturret:2:F",
      "uniqueStatisticOasisId": 288335, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "mute", "operatorIndex": "3:1", "uniqueStatisticName": "operatorpvp_mute_gadgetjammed:3:1",
      "uniqueStatisticOasisId": 194664, "kills": 74, "death": 73, "headShot": 29, "meleeKills": 0, "totalXp": 247315,
      "timePlayed": 23545, "roundWon": 69, "roundLost": 47},
     {"name": "clash", "operatorIndex": "3:10", "uniqueStatisticName": "operatorpvp_clash_sloweddown:3:10",
      "uniqueStatisticOasisId": 293483, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "kaid", "operatorIndex": "3:11", "uniqueStatisticName": "operatorpvp_kaid_electroclawelectrify:3:11",
      "uniqueStatisticOasisId": 294144, "kills": 13, "death": 14, "headShot": 5, "meleeKills": 0, "totalXp": 55330,
      "timePlayed": 4552, "roundWon": 15, "roundLost": 7},
     {"name": "gridlock", "operatorIndex": "3:12", "uniqueStatisticName": "operatorpvp_gridlock_traxdeployed:3:12",
      "uniqueStatisticOasisId": 298667, "kills": 142, "death": 117, "headShot": 64, "meleeKills": 1, "totalXp": 417460,
      "timePlayed": 35000, "roundWon": 84, "roundLost": 83},
     {"name": "wamai", "operatorIndex": "3:17", "uniqueStatisticName": "operatorpvp_wamai_gadgetdestroybymagnet:3:17",
      "uniqueStatisticOasisId": 312719, "kills": 0, "death": 0, "headShot": 0, "meleeKills": 0, "totalXp": 0,
      "timePlayed": 0, "roundWon": 0, "roundLost": 0},
     {"name": "ash", "operatorIndex": "3:2", "uniqueStatisticName": "operatorpvp_ash_bonfirewallbreached:3:2",
      "uniqueStatisticOasisId": 194677, "kills": 358, "death": 386, "headShot": 144, "meleeKills": 2, "totalXp": 948630,
      "timePlayed": 102372, "roundWon": 215, "roundLost": 288},
     {"name": "rook", "operatorIndex": "3:3", "uniqueStatisticName": "operatorpvp_rook_armortakenteammate:3:3",
      "uniqueStatisticOasisId": 194667, "kills": 362, "death": 288, "headShot": 127, "meleeKills": 1,
      "totalXp": 1001295, "timePlayed": 89038, "roundWon": 255, "roundLost": 194},
     {"name": "fuze", "operatorIndex": "3:4", "uniqueStatisticName": "operatorpvp_fuze_clusterchargekill:3:4",
      "uniqueStatisticOasisId": 194691, "kills": 91, "death": 108, "headShot": 17, "meleeKills": 1, "totalXp": 250725,
      "timePlayed": 29521, "roundWon": 57, "roundLost": 89},
     {"name": "iq", "operatorIndex": "3:5", "uniqueStatisticName": "operatorpvp_iq_gadgetspotbyef:3:5",
      "uniqueStatisticOasisId": 194696, "kills": 63, "death": 68, "headShot": 24, "meleeKills": 0, "totalXp": 163637,
      "timePlayed": 18927, "roundWon": 37, "roundLost": 55},
     {"name": "frost", "operatorIndex": "3:6", "uniqueStatisticName": "operatorpvp_frost_dbno:3:6",
      "uniqueStatisticOasisId": 200104, "kills": 35, "death": 33, "headShot": 8, "meleeKills": 0, "totalXp": 107455,
      "timePlayed": 12271, "roundWon": 39, "roundLost": 22},
     {"name": "valkyrie", "operatorIndex": "3:7", "uniqueStatisticName": "operatorpvp_valkyrie_camdeployed:3:7",
      "uniqueStatisticOasisId": 202311, "kills": 514, "death": 386, "headShot": 200, "meleeKills": 7,
      "totalXp": 1445265, "timePlayed": 121386, "roundWon": 367, "roundLost": 231},
     {"name": "caveira", "operatorIndex": "3:8", "uniqueStatisticName": "operatorpvp_caveira_interrogations:1:8",
      "uniqueStatisticOasisId": 207945, "kills": 261, "death": 208, "headShot": 20, "meleeKills": 4, "totalXp": 746385,
      "timePlayed": 60861, "roundWon": 170, "roundLost": 133},
     {"name": "echo", "operatorIndex": "3:9", "uniqueStatisticName": "operatorpvp_echo_enemy_sonicburst_affected:3:9",
      "uniqueStatisticOasisId": 217324, "kills": 6, "death": 10, "headShot": 1, "meleeKills": 0, "totalXp": 29600,
      "timePlayed": 3080, "roundWon": 8, "roundLost": 8},
     {"name": "mira", "operatorIndex": "3:A", "uniqueStatisticName": "operatorpvp_black_mirror_gadget_deployed:3:A",
      "uniqueStatisticOasisId": 229328, "kills": 26, "death": 36, "headShot": 12, "meleeKills": 1, "totalXp": 103550,
      "timePlayed": 9846, "roundWon": 26, "roundLost": 24},
     {"name": "lesion", "operatorIndex": "3:B", "uniqueStatisticName": "operatorpvp_caltrop_enemy_affected:3:B",
      "uniqueStatisticOasisId": 243474, "kills": 672, "death": 588, "headShot": 269, "meleeKills": 4,
      "totalXp": 2138498, "timePlayed": 179305, "roundWon": 516, "roundLost": 384},
     {"name": "zofia", "operatorIndex": "3:C", "uniqueStatisticName": "operatorpvp_concussiongrenade_detonate:3:C",
      "uniqueStatisticOasisId": 254990, "kills": 94, "death": 78, "headShot": 30, "meleeKills": 1, "totalXp": 221570,
      "timePlayed": 22220, "roundWon": 49, "roundLost": 60}, {"name": "vigil", "operatorIndex": "3:D",
                                                              "uniqueStatisticName": "operatorpvp_attackerdrone_diminishedrealitymode:3:D",
                                                              "uniqueStatisticOasisId": 283004, "kills": 128,
                                                              "death": 108, "headShot": 45, "meleeKills": 1,
                                                              "totalXp": 356665, "timePlayed": 30159, "roundWon": 88,
                                                              "roundLost": 64},
     {"name": "lion", "operatorIndex": "3:E", "uniqueStatisticName": "operatorpvp_tagger_tagdevice_spot:3:E",
      "uniqueStatisticOasisId": 282608, "kills": 80, "death": 120, "headShot": 29, "meleeKills": 0, "totalXp": 225610,
      "timePlayed": 27571, "roundWon": 53, "roundLost": 91},
     {"name": "alibi", "operatorIndex": "3:F", "uniqueStatisticName": "operatorpvp_deceiver_revealedattackers:3:F",
      "uniqueStatisticOasisId": 282404, "kills": 23, "death": 18, "headShot": 13, "meleeKills": 2, "totalXp": 85780,
      "timePlayed": 6744, "roundWon": 22, "roundLost": 12},
     {"name": "sledge", "operatorIndex": "4:1", "uniqueStatisticName": "operatorpvp_sledge_hammerhole:4:1",
      "uniqueStatisticOasisId": 194672, "kills": 369, "death": 421, "headShot": 143, "meleeKills": 2,
      "totalXp": 1048035, "timePlayed": 113834, "roundWon": 247, "roundLost": 326},
     {"name": "pulse", "operatorIndex": "4:2", "uniqueStatisticName": "operatorpvp_pulse_heartbeatspot:4:2",
      "uniqueStatisticOasisId": 194665, "kills": 8, "death": 10, "headShot": 1, "meleeKills": 0, "totalXp": 29700,
      "timePlayed": 3236, "roundWon": 10, "roundLost": 6}, {"name": "twitch", "operatorIndex": "4:3",
                                                            "uniqueStatisticName": "operatorpvp_twitch_gadgetdestroybyshockdrone:4:3",
                                                            "uniqueStatisticOasisId": 194686, "kills": 82, "death": 109,
                                                            "headShot": 34, "meleeKills": 1, "totalXp": 298225,
                                                            "timePlayed": 30274, "roundWon": 68, "roundLost": 80},
     {"name": "kapkan", "operatorIndex": "4:4", "uniqueStatisticName": "operatorpvp_kapkan_boobytrapkill:4:4",
      "uniqueStatisticOasisId": 194668, "kills": 84, "death": 92, "headShot": 25, "meleeKills": 0, "totalXp": 280975,
      "timePlayed": 28417, "roundWon": 77, "roundLost": 61},
     {"name": "jager", "operatorIndex": "4:5", "uniqueStatisticName": "operatorpvp_jager_gadgetdestroybycatcher:4:5",
      "uniqueStatisticOasisId": 194670, "kills": 304, "death": 242, "headShot": 88, "meleeKills": 0, "totalXp": 813550,
      "timePlayed": 74206, "roundWon": 203, "roundLost": 167},
     {"name": "finka", "operatorIndex": "4:E", "uniqueStatisticName": "operatorpvp_rush_adrenalinerush:4:E",
      "uniqueStatisticOasisId": 282609, "kills": 16, "death": 17, "headShot": 6, "meleeKills": 0, "totalXp": 47960,
      "timePlayed": 4397, "roundWon": 9, "roundLost": 13}, {"name": "thatcher", "operatorIndex": "5:1",
                                                            "uniqueStatisticName": "operatorpvp_thatcher_gadgetdestroywithemp:5:1",
                                                            "uniqueStatisticOasisId": 194673, "kills": 219,
                                                            "death": 289, "headShot": 76, "meleeKills": 0,
                                                            "totalXp": 708330, "timePlayed": 79005, "roundWon": 168,
                                                            "roundLost": 220},
     {"name": "thermite", "operatorIndex": "5:2",
      "uniqueStatisticName": "operatorpvp_thermite_reinforcementbreached:5:2", "uniqueStatisticOasisId": 194681,
      "kills": 171, "death": 206, "headShot": 67, "meleeKills": 1, "totalXp": 485760, "timePlayed": 53558,
      "roundWon": 98, "roundLost": 160},
     {"name": "montagne", "operatorIndex": "5:3", "uniqueStatisticName": "operatorpvp_montagne_shieldblockdamage:5:3",
      "uniqueStatisticOasisId": 194688, "kills": 3, "death": 14, "headShot": 1, "meleeKills": 0, "totalXp": 27425,
      "timePlayed": 3666, "roundWon": 8, "roundLost": 11},
     {"name": "tachanka", "operatorIndex": "5:4", "uniqueStatisticName": "operatorpvp_tachanka_turretkill:5:4",
      "uniqueStatisticOasisId": 194669, "kills": 5, "death": 7, "headShot": 3, "meleeKills": 0, "totalXp": 18250,
      "timePlayed": 2286, "roundWon": 6, "roundLost": 5},
     {"name": "bandit", "operatorIndex": "5:5", "uniqueStatisticName": "operatorpvp_bandit_batterykill:5:5",
      "uniqueStatisticOasisId": 194671, "kills": 50, "death": 55, "headShot": 17, "meleeKills": 2, "totalXp": 159053,
      "timePlayed": 14996, "roundWon": 36, "roundLost": 40}]
    return Response(json.dumps(list),  mimetype='application/json')



if __name__ == "__main__":
    app.run(debug=True)


