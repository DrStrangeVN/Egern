vif_only: true


include_all_networks: true


include_apns: true


dns: {}


policy_groups:


- select:


    name: 🅵🅸🅽🅰🅻 🆅🅿🅽


    policies:


    - 🅐🅤🅣🅞 🅣🅔🅢🅣


    - 🅢🅘🅝🅖🅐🅟🅞🅡🅔


    - 🅗🅞🅝🅖 🅚🅞🅝🅖


    - DIRECT


    flatten: false


    filter: ''


    icon: https://cdn-icons-png.freepik.com/512/10490/10490264.png


    hidden: false


- load_balance:


    name: 🅑🅐🅛🅐🅝🅒🅔


    policies:


    - 🅢🅞🅤🅡🅔 🅤🅡🅛


    flatten: true


    filter: ''


    icon: https://cdn-icons-png.freepik.com/512/6966/6966918.png


    hidden: false


- auto_test:


    name: 🅐🅤🅣🅞 🅣🅔🅢🅣


    policies:


    - 🅢🅞🅤🅡🅔 🅤🅡🅛


    flatten: true


    filter: ''


    icon: https://cdn-icons-png.freepik.com/512/9154/9154287.png


    hidden: false


- load_balance:


    name: 🅢🅘🅝🅖🅐🅟🅞🅡🅔


    policies:


    - 🅢🅞🅤🅡🅔 🅤🅡🅛


    flatten: true


    filter: 𝗦𝗜𝗡𝗚𝗔𝗣𝗢𝗥𝗘


    icon: https://cdn-icons-png.freepik.com/512/10948/10948393.png


    hidden: false


- load_balance:


    name: 🅗🅞🅝🅖 🅚🅞🅝🅖


    policies:


    - 🅢🅞🅤🅡🅔 🅤🅡🅛


    filter: 𝗛𝗢𝗡𝗚 𝗞𝗢𝗡𝗚


    icon: https://cdn-icons-png.freepik.com/512/10948/10948387.png


    hidden: true


- external:


    name: 🅢🅞🅤🅡🅔 🅤🅡🅛


    type: select


    urls:


    - xxxx


    hidden: true


- select:


    name: 🅐🅓🅢 🅑🅛🅞🅒🅚


    policies:


    - DIRECT


    - REJECT


    icon: https://cdn-icons-png.freepik.com/512/9154/9154277.png


rules:


- rule_set:


    match: https://github.com/DrStrangeVN/Egern/raw/main/Rule_20k.yaml


    policy: 🅐🅓🅢 🅑🅛🅞🅒🅚


- ssid:


    match: '*'


    policy: DIRECT


- default:


    policy: 🅵🅸🅽🅰🅻 🆅🅿🅽


url_rewrites:


- match: ^https:\/\/[\w-]+\.googlevideo\.com\/initplayback\?.+&oad


  location: reject-200


  status_code: 302


scriptings:


- http_response:


    name: TRUECALL


    match: ^https://premium-(.+)\.truecaller\.com/v\d/(subscriptions|products\/apple)?


    script_url: https://raw.githubusercontent.com/lonely0811/olsd/main/truecall.js


    body_required: true


- http_response:


    name: YOUTUBERP


    match: ^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting)\?


    script_url: https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.response.beta.js


    body_required: true


    binary_body: true


- http_request:


    name: YOUTUBERQ


    match: ^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|reel\/reel_watch_sequence)\?


    script_url: https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.request.beta.js


    body_required: true


    binary_body: true


mitm:


  enabled: true


  ca_p12: egern.p12


  ca_passphrase: egern


  hostnames:


  - premium*.truecaller.com


  - rr*.googlevideo.com


  - youtubei.googleapis.com


  - '*.googlevideo.com'


modules:


- name: 𝗦𝗨𝗕 𝗦𝗧𝗢𝗥𝗘


  url: https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge.sgmodule


  enabled: true


