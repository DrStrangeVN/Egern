#🆅🆄 🅳🅸🅽🅷 🆃🆁🅸
#01.01.2024
#Config by AE Viefast
policy_groups:
- select:
    name: 🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁
    policies:
    - ⓅⒾⓃⒼ 🅐🅛🅛
    - ⓅⒾⓃⒼ 🅥🅝🅐🅜
    - ⓁⓄⒶⒹ 🅥🅝🅐🅜
    - ⓁⓄⒶⒹ 🅢🅘🅝🅖
    - DIRECT
    flatten: false
    filter: ''
    icon: https://cdn4.iconfinder.com/data/icons/cyber-security-175/64/VPN_Protection-1024.png
    hidden: false
- auto_test:
    name: ⓅⒾⓃⒼ 🅐🅛🅛
    policies:
    - 🅥🅘🅔 🅕🅐🅢🅣
    flatten: true
    filter: 🇻🇳
    interval: 600
    tolerance: 50
    hidden: true
- auto_test:
    name: ⓅⒾⓃⒼ 🅥🅝🅐🅜
    policies:
    - 🅥🅘🅔 🅕🅐🅢🅣
    flatten: true
    filter: 🇻🇳
    hidden: true
- load_balance:
    name: ⓁⓄⒶⒹ 🅥🅝🅐🅜
    policies:
    - 🅥🅘🅔 🅕🅐🅢🅣
    flatten: true
    filter: 🇻🇳
    hidden: true
- load_balance:
    name: ⓁⓄⒶⒹ 🅢🅘🅝🅖
    policies:
    - 🅥🅘🅔 🅕🅐🅢🅣
    flatten: true
    filter: 🇸🇬
    hidden: true
- external:
    name: 🅥🅘🅔 🅕🅐🅢🅣
    type: select
    urls:
    - xxxx
    hidden: true
- select:
    name: ⒶⒹⓈ 🅑🅛🅞🅒🅚
    policies:
    - DIRECT
    - REJECT
    icon: https://cdn1.iconfinder.com/data/icons/seo-marketing-128/64/ads_block_advertisement_advertising-1024.png
rules:
- rule_set:
    match: https://github.com/DrStrangeVN/Egern/raw/main/Rule_20k.yaml
    policy: ⒶⒹⓈ 🅑🅛🅞🅒🅚
- ip_cidr:
    match: 127.0.0.0/8
    policy: DIRECT
- ip_cidr:
    match: 224.0.0.0/24
    policy: DIRECT
- default:
    policy: 🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁
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
  ca_passphrase: egern
  hostnames:
  - premium*.truecaller.com
  - rr*.googlevideo.com
  - youtubei.googleapis.com
  - '*.googlevideo.com'
