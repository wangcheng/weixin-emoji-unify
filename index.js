const EMOJI_SOFTBANK_MAP = {
  '\u{E428}': '\u{1F46C}',
  '\u{E305}': '\u{1F332}',
  '\u{E346}': '\u{1F34B}',
  '\u{E106}': '\u{1F60E}',
  '\u{E404}': '\u{1F600}',
  '\u{E049}': '\u{2601}',
  '\u{E04B}': '\u{2614}',
  '\u{E048}': '\u{26C4}',
  '\u{E13D}': '\u{26A1}',
  '\u{E443}': '\u{1F300}',
  '\u{E43C}': '\u{1F302}',
  '\u{E44B}': '\u{1F303}',
  '\u{E04D}': '\u{1F304}',
  '\u{E449}': '\u{1F305}',
  '\u{E146}': '\u{1F306}',
  '\u{E44A}': '\u{1F307}',
  '\u{E44C}': '\u{1F308}',
  '\u{E04A}\u{E049}': '\u{26C5}',
  '\u{E43E}': '\u{1F30A}',
  '\u{E04C}': '\u{1F314}',
  '\u{E335}': '\u{1F31F}',
  '\u{E024}': '\u{1F550}',
  '\u{E025}': '\u{1F551}',
  '\u{E026}': '\u{1F552}',
  '\u{E027}': '\u{1F553}',
  '\u{E028}': '\u{1F554}',
  '\u{E029}': '\u{1F555}',
  '\u{E02A}': '\u{1F556}',
  '\u{E02B}': '\u{1F557}',
  '\u{E02C}': '\u{1F558}',
  '\u{E02D}': '\u{1F559}',
  '\u{E02E}': '\u{1F55A}',
  '\u{E02F}': '\u{1F55B}',
  '\u{E23F}': '\u{2648}',
  '\u{E240}': '\u{2649}',
  '\u{E241}': '\u{264A}',
  '\u{E242}': '\u{264B}',
  '\u{E243}': '\u{264C}',
  '\u{E244}': '\u{264D}',
  '\u{E245}': '\u{264E}',
  '\u{E246}': '\u{264F}',
  '\u{E247}': '\u{2650}',
  '\u{E248}': '\u{2651}',
  '\u{E249}': '\u{2652}',
  '\u{E24A}': '\u{2653}',
  '\u{E24B}': '\u{26CE}',
  '\u{E110}': '\u{1F340}',
  '\u{E304}': '\u{1F337}',
  '\u{E118}': '\u{1F341}',
  '\u{E030}': '\u{1F338}',
  '\u{E032}': '\u{1F339}',
  '\u{E119}': '\u{1F342}',
  '\u{E447}': '\u{1F343}',
  '\u{E303}': '\u{1F33A}',
  '\u{E307}': '\u{1F334}',
  '\u{E308}': '\u{1F335}',
  '\u{E444}': '\u{1F33E}',
  '\u{E345}': '\u{1F34E}',
  '\u{E347}': '\u{1F353}',
  '\u{E348}': '\u{1F349}',
  '\u{E349}': '\u{1F345}',
  '\u{E34A}': '\u{1F346}',
  '\u{E419}': '\u{1F440}',
  '\u{E41B}': '\u{1F442}',
  '\u{E41A}': '\u{1F443}',
  '\u{E41C}': '\u{1F444}',
  '\u{E409}': '\u{1F445}',
  '\u{E31C}': '\u{1F484}',
  '\u{E31D}': '\u{1F485}',
  '\u{E31E}': '\u{1F486}',
  '\u{E31F}': '\u{1F487}',
  '\u{E320}': '\u{1F488}',
  '\u{E001}': '\u{1F466}',
  '\u{E002}': '\u{1F467}',
  '\u{E004}': '\u{1F468}',
  '\u{E005}': '\u{1F469}',
  '\u{E152}': '\u{1F46E}',
  '\u{E429}': '\u{1F46F}',
  '\u{E515}': '\u{1F471}',
  '\u{E516}': '\u{1F472}',
  '\u{E517}': '\u{1F473}',
  '\u{E518}': '\u{1F474}',
  '\u{E519}': '\u{1F475}',
  '\u{E51A}': '\u{1F476}',
  '\u{E51B}': '\u{1F477}',
  '\u{E51C}': '\u{1F478}',
  '\u{E11B}': '\u{1F47B}',
  '\u{E04E}': '\u{1F47C}',
  '\u{E10C}': '\u{1F47D}',
  '\u{E12B}': '\u{1F47E}',
  '\u{E11A}': '\u{1F47F}',
  '\u{E11C}': '\u{1F480}',
  '\u{E253}': '\u{1F481}',
  '\u{E51E}': '\u{1F482}',
  '\u{E51F}': '\u{1F483}',
  '\u{E52D}': '\u{1F40D}',
  '\u{E134}': '\u{1F40E}',
  '\u{E52E}': '\u{1F414}',
  '\u{E52F}': '\u{1F417}',
  '\u{E530}': '\u{1F42B}',
  '\u{E526}': '\u{1F418}',
  '\u{E527}': '\u{1F428}',
  '\u{E528}': '\u{1F412}',
  '\u{E529}': '\u{1F411}',
  '\u{E10A}': '\u{1F419}',
  '\u{E441}': '\u{1F41A}',
  '\u{E525}': '\u{1F41B}',
  '\u{E522}': '\u{1F420}',
  '\u{E019}': '\u{1F421}',
  '\u{E523}': '\u{1F424}',
  '\u{E521}': '\u{1F426}',
  '\u{E055}': '\u{1F427}',
  '\u{E052}': '\u{1F429}',
  '\u{E520}': '\u{1F42C}',
  '\u{E053}': '\u{1F42D}',
  '\u{E050}': '\u{1F42F}',
  '\u{E04F}': '\u{1F431}',
  '\u{E054}': '\u{1F433}',
  '\u{E01A}': '\u{1F434}',
  '\u{E109}': '\u{1F435}',
  '\u{E10B}': '\u{1F437}',
  '\u{E051}': '\u{1F43B}',
  '\u{E524}': '\u{1F439}',
  '\u{E52A}': '\u{1F43A}',
  '\u{E52B}': '\u{1F42E}',
  '\u{E52C}': '\u{1F430}',
  '\u{E531}': '\u{1F438}',
  '\u{E536}': '\u{1F43E}',
  '\u{E059}': '\u{1F620}',
  '\u{E403}': '\u{1F629}',
  '\u{E410}': '\u{1F632}',
  '\u{E058}': '\u{1F61E}',
  '\u{E406}': '\u{1F635}',
  '\u{E40F}': '\u{1F630}',
  '\u{E40E}': '\u{1F612}',
  '\u{E105}': '\u{1F61C}',
  '\u{E056}': '\u{1F60B}',
  '\u{E418}': '\u{1F618}',
  '\u{E417}': '\u{1F61A}',
  '\u{E40C}': '\u{1F637}',
  '\u{E40D}': '\u{1F633}',
  '\u{E057}': '\u{1F603}',
  '\u{E415}\u{E331}': '\u{1F605}',
  '\u{E40A}': '\u{1F606}',
  '\u{E412}': '\u{1F602}',
  '\u{E414}': '\u{263A}',
  '\u{E415}': '\u{1F604}',
  '\u{E413}': '\u{1F622}',
  '\u{E411}': '\u{1F62D}',
  '\u{E40B}': '\u{1F628}',
  '\u{E416}': '\u{1F621}',
  '\u{E407}': '\u{1F616}',
  '\u{E107}': '\u{1F631}',
  '\u{E408}': '\u{1F62A}',
  '\u{E402}': '\u{1F60F}',
  '\u{E108}': '\u{1F613}',
  '\u{E405}': '\u{1F609}',
  '\u{E423}': '\u{1F645}',
  '\u{E424}': '\u{1F646}',
  '\u{E426}': '\u{1F647}',
  '\u{E012}': '\u{1F64B}',
  '\u{E427}': '\u{1F64C}',
  '\u{E41D}': '\u{1F64F}',
  '\u{E036}': '\u{1F3E0}',
  '\u{E038}': '\u{1F3E2}',
  '\u{E153}': '\u{1F3E3}',
  '\u{E155}': '\u{1F3E5}',
  '\u{E14D}': '\u{1F3E6}',
  '\u{E154}': '\u{1F3E7}',
  '\u{E158}': '\u{1F3E8}',
  '\u{E501}': '\u{1F3E9}',
  '\u{E156}': '\u{1F3EA}',
  '\u{E157}': '\u{1F3EB}',
  '\u{E037}': '\u{26EA}',
  '\u{E121}': '\u{26F2}',
  '\u{E504}': '\u{1F3EC}',
  '\u{E505}': '\u{1F3EF}',
  '\u{E506}': '\u{1F3F0}',
  '\u{E508}': '\u{1F3ED}',
  '\u{E202}': '\u{2693}',
  '\u{E30B}': '\u{1F3EE}',
  '\u{E03B}': '\u{1F5FB}',
  '\u{E509}': '\u{1F5FC}',
  '\u{E51D}': '\u{1F5FD}',
  '\u{E007}': '\u{1F45E}',
  '\u{E13E}': '\u{1F460}',
  '\u{E31A}': '\u{1F461}',
  '\u{E31B}': '\u{1F462}',
  '\u{E006}': '\u{1F455}',
  '\u{E10E}': '\u{1F451}',
  '\u{E302}': '\u{1F454}',
  '\u{E318}': '\u{1F452}',
  '\u{E319}': '\u{1F457}',
  '\u{E321}': '\u{1F458}',
  '\u{E322}': '\u{1F459}',
  '\u{E323}': '\u{1F45C}',
  '\u{E12F}': '\u{1F4B0}',
  '\u{E149}': '\u{1F4B1}',
  '\u{E14A}': '\u{1F4B9}',
  '\u{E513}': '\u{1F1E8}\u{1F1F3}',
  '\u{E50E}': '\u{1F1E9}\u{1F1EA}',
  '\u{E511}': '\u{1F1EA}\u{1F1F8}',
  '\u{E50D}': '\u{1F1EB}\u{1F1F7}',
  '\u{E510}': '\u{1F1EC}\u{1F1E7}',
  '\u{E50F}': '\u{1F1EE}\u{1F1F9}',
  '\u{E50B}': '\u{1F1EF}\u{1F1F5}',
  '\u{E514}': '\u{1F1F0}\u{1F1F7}',
  '\u{E512}': '\u{1F1F7}\u{1F1FA}',
  '\u{E50C}': '\u{1F1FA}\u{1F1F8}',
  '\u{E11D}': '\u{1F525}',
  '\u{E116}': '\u{1F528}',
  '\u{E113}': '\u{1F52B}',
  '\u{E23E}': '\u{1F52E}',
  '\u{E209}': '\u{1F530}',
  '\u{E031}': '\u{1F531}',
  '\u{E13B}': '\u{1F489}',
  '\u{E30F}': '\u{1F48A}',
  '\u{E532}': '\u{1F170}',
  '\u{E533}': '\u{1F171}',
  '\u{E534}': '\u{1F18E}',
  '\u{E535}': '\u{1F17E}',
  '\u{E314}': '\u{1F380}',
  '\u{E112}': '\u{1F381}',
  '\u{E34B}': '\u{1F382}',
  '\u{E033}': '\u{1F384}',
  '\u{E448}': '\u{1F385}',
  '\u{E143}': '\u{1F38C}',
  '\u{E117}': '\u{1F386}',
  '\u{E310}': '\u{1F388}',
  '\u{E312}': '\u{1F389}',
  '\u{E436}': '\u{1F38D}',
  '\u{E438}': '\u{1F38E}',
  '\u{E439}': '\u{1F393}',
  '\u{E43A}': '\u{1F392}',
  '\u{E43B}': '\u{1F38F}',
  '\u{E440}': '\u{1F387}',
  '\u{E442}': '\u{1F390}',
  '\u{E445}': '\u{1F383}',
  '\u{E446}': '\u{1F391}',
  '\u{E009}': '\u{260E}',
  '\u{E00A}': '\u{1F4F1}',
  '\u{E104}': '\u{1F4F2}',
  '\u{E301}': '\u{1F4DD}',
  '\u{E00B}': '\u{1F4E0}',
  '\u{E103}': '\u{2709}',
  '\u{E101}': '\u{1F4EA}',
  '\u{E102}': '\u{1F4EE}',
  '\u{E142}': '\u{1F4E2}',
  '\u{E317}': '\u{1F4E3}',
  '\u{E14B}': '\u{1F4E1}',
  '\u{E11F}': '\u{1F4BA}',
  '\u{E00C}': '\u{1F4BB}',
  '\u{E11E}': '\u{1F4BC}',
  '\u{E316}': '\u{1F4BD}',
  '\u{E126}': '\u{1F4BF}',
  '\u{E127}': '\u{1F4C0}',
  '\u{E313}': '\u{2702}',
  '\u{E148}': '\u{1F4D3}',
  '\u{E016}': '\u{26BE}',
  '\u{E014}': '\u{26F3}',
  '\u{E015}': '\u{1F3BE}',
  '\u{E018}': '\u{26BD}',
  '\u{E013}': '\u{1F3BF}',
  '\u{E42A}': '\u{1F3C0}',
  '\u{E132}': '\u{1F3C1}',
  '\u{E115}': '\u{1F3C3}',
  '\u{E017}': '\u{1F3C4}',
  '\u{E131}': '\u{1F3C6}',
  '\u{E42B}': '\u{1F3C8}',
  '\u{E42D}': '\u{1F3CA}',
  '\u{E01E}': '\u{1F683}',
  '\u{E434}': '\u{1F687}',
  '\u{E435}': '\u{1F684}',
  '\u{E01F}': '\u{1F685}',
  '\u{E01B}': '\u{1F697}',
  '\u{E42E}': '\u{1F699}',
  '\u{E159}': '\u{1F68C}',
  '\u{E150}': '\u{1F68F}',
  '\u{E01D}': '\u{2708}',
  '\u{E01C}': '\u{26F5}',
  '\u{E039}': '\u{1F689}',
  '\u{E10D}': '\u{1F680}',
  '\u{E135}': '\u{1F6A4}',
  '\u{E15A}': '\u{1F695}',
  '\u{E42F}': '\u{1F69A}',
  '\u{E430}': '\u{1F692}',
  '\u{E431}': '\u{1F691}',
  '\u{E432}': '\u{1F693}',
  '\u{E03A}': '\u{26FD}',
  '\u{E14F}': '\u{1F17F}',
  '\u{E14E}': '\u{1F6A5}',
  '\u{E137}': '\u{1F6A7}',
  '\u{E123}': '\u{2668}',
  '\u{E122}': '\u{26FA}',
  '\u{E124}': '\u{1F3A1}',
  '\u{E433}': '\u{1F3A2}',
  '\u{E03C}': '\u{1F3A4}',
  '\u{E03D}': '\u{1F3A5}',
  '\u{E507}': '\u{1F3A6}',
  '\u{E30A}': '\u{1F3A7}',
  '\u{E502}': '\u{1F3A8}',
  '\u{E503}': '\u{1F3A9}',
  '\u{E125}': '\u{1F3AB}',
  '\u{E324}': '\u{1F3AC}',
  '\u{E12D}': '\u{1F004}',
  '\u{E130}': '\u{1F3AF}',
  '\u{E133}': '\u{1F3B0}',
  '\u{E42C}': '\u{1F3B1}',
  '\u{E03E}': '\u{1F3B5}',
  '\u{E326}': '\u{1F3B6}',
  '\u{E040}': '\u{1F3B7}',
  '\u{E041}': '\u{1F3B8}',
  '\u{E042}': '\u{1F3BA}',
  '\u{E12C}': '\u{303D}',
  '\u{E008}': '\u{1F4F7}',
  '\u{E12A}': '\u{1F4FA}',
  '\u{E128}': '\u{1F4FB}',
  '\u{E129}': '\u{1F4FC}',
  '\u{E003}': '\u{1F48B}',
  '\u{E103}\u{E328}': '\u{1F48C}',
  '\u{E034}': '\u{1F48D}',
  '\u{E035}': '\u{1F48E}',
  '\u{E111}': '\u{1F48F}',
  '\u{E306}': '\u{1F490}',
  '\u{E425}': '\u{1F491}',
  '\u{E43D}': '\u{1F492}',
  '\u{E207}': '\u{1F51E}',
  '\u{E24E}': '\u{A9}',
  '\u{E24F}': '\u{AE}',
  '\u{E537}': '\u{2122}',
  '\u{E210}': '#\u{20E3}',
  '\u{E21C}': '1\u{20E3}',
  '\u{E21D}': '2\u{20E3}',
  '\u{E21E}': '3\u{20E3}',
  '\u{E21F}': '4\u{20E3}',
  '\u{E220}': '5\u{20E3}',
  '\u{E221}': '6\u{20E3}',
  '\u{E222}': '7\u{20E3}',
  '\u{E223}': '8\u{20E3}',
  '\u{E224}': '9\u{20E3}',
  '\u{E225}': '0\u{20E3}',
  '\u{E20B}': '\u{1F4F6}',
  '\u{E250}': '\u{1F4F3}',
  '\u{E251}': '\u{1F4F4}',
  '\u{E120}': '\u{1F354}',
  '\u{E342}': '\u{1F359}',
  '\u{E046}': '\u{1F370}',
  '\u{E340}': '\u{1F35C}',
  '\u{E339}': '\u{1F35E}',
  '\u{E147}': '\u{1F373}',
  '\u{E33A}': '\u{1F366}',
  '\u{E33B}': '\u{1F35F}',
  '\u{E33C}': '\u{1F361}',
  '\u{E33D}': '\u{1F358}',
  '\u{E33E}': '\u{1F35A}',
  '\u{E33F}': '\u{1F35D}',
  '\u{E341}': '\u{1F35B}',
  '\u{E343}': '\u{1F362}',
  '\u{E344}': '\u{1F363}',
  '\u{E34C}': '\u{1F371}',
  '\u{E34D}': '\u{1F372}',
  '\u{E43F}': '\u{1F367}',
  '\u{E043}': '\u{1F374}',
  '\u{E045}': '\u{2615}',
  '\u{E044}': '\u{1F378}',
  '\u{E047}': '\u{1F37A}',
  '\u{E338}': '\u{1F375}',
  '\u{E30C}': '\u{1F37B}',
  '\u{E236}': '\u{2197}',
  '\u{E238}': '\u{2198}',
  '\u{E237}': '\u{2196}',
  '\u{E239}': '\u{2199}',
  '\u{E232}': '\u{2B06}',
  '\u{E233}': '\u{2B07}',
  '\u{E234}': '\u{27A1}',
  '\u{E235}': '\u{2B05}',
  '\u{E23A}': '\u{25B6}',
  '\u{E23B}': '\u{25C0}',
  '\u{E23C}': '\u{23E9}',
  '\u{E23D}': '\u{23EA}',
  '\u{E332}': '\u{2B55}',
  '\u{E333}': '\u{274C}',
  '\u{E021}': '\u{2757}',
  '\u{E020}': '\u{2753}',
  '\u{E336}': '\u{2754}',
  '\u{E337}': '\u{2755}',
  '\u{E211}': '\u{27BF}',
  '\u{E022}': '\u{2764}',
  '\u{E327}': '\u{1F493}',
  '\u{E023}': '\u{1F494}',
  '\u{E328}': '\u{1F497}',
  '\u{E329}': '\u{1F498}',
  '\u{E32A}': '\u{1F499}',
  '\u{E32B}': '\u{1F49A}',
  '\u{E32C}': '\u{1F49B}',
  '\u{E32D}': '\u{1F49C}',
  '\u{E437}': '\u{1F49D}',
  '\u{E204}': '\u{1F49F}',
  '\u{E20C}': '\u{2665}',
  '\u{E20E}': '\u{2660}',
  '\u{E20D}': '\u{2666}',
  '\u{E20F}': '\u{2663}',
  '\u{E30E}': '\u{1F6AC}',
  '\u{E208}': '\u{1F6AD}',
  '\u{E20A}': '\u{267F}',
  '\u{E252}': '\u{26A0}',
  '\u{E136}': '\u{1F6B2}',
  '\u{E201}': '\u{1F6B6}',
  '\u{E138}': '\u{1F6B9}',
  '\u{E139}': '\u{1F6BA}',
  '\u{E13F}': '\u{1F6C0}',
  '\u{E151}': '\u{1F6BB}',
  '\u{E140}': '\u{1F6BD}',
  '\u{E309}': '\u{1F6BE}',
  '\u{E13A}': '\u{1F6BC}',
  '\u{E214}': '\u{1F192}',
  '\u{E229}': '\u{1F194}',
  '\u{E212}': '\u{1F195}',
  '\u{E24D}': '\u{1F197}',
  '\u{E213}': '\u{1F199}',
  '\u{E12E}': '\u{1F19A}',
  '\u{E203}': '\u{1F201}',
  '\u{E228}': '\u{1F202}',
  '\u{E22B}': '\u{1F233}',
  '\u{E22A}': '\u{1F235}',
  '\u{E215}': '\u{1F236}',
  '\u{E216}': '\u{1F21A}',
  '\u{E217}': '\u{1F237}',
  '\u{E218}': '\u{1F238}',
  '\u{E227}': '\u{1F239}',
  '\u{E22C}': '\u{1F22F}',
  '\u{E22D}': '\u{1F23A}',
  '\u{E315}': '\u{3299}',
  '\u{E30D}': '\u{3297}',
  '\u{E226}': '\u{1F250}',
  '\u{E10F}': '\u{1F4A1}',
  '\u{E334}': '\u{1F4A2}',
  '\u{E311}': '\u{1F4A3}',
  '\u{E13C}': '\u{1F4A4}',
  '\u{E331}': '\u{1F4A6}',
  '\u{E330}': '\u{1F4A8}',
  '\u{E05A}': '\u{1F4A9}',
  '\u{E14C}': '\u{1F4AA}',
  '\u{E32E}': '\u{2728}',
  '\u{E205}': '\u{2734}',
  '\u{E206}': '\u{2733}',
  '\u{E219}': '\u{26AA}',
  '\u{E21A}': '\u{1F535}',
  '\u{E21B}': '\u{1F533}',
  '\u{E32F}': '\u{2B50}',
  '\u{E141}': '\u{1F50A}',
  '\u{E114}': '\u{1F50D}',
  '\u{E144}': '\u{1F512}',
  '\u{E145}': '\u{1F513}',
  '\u{E03F}': '\u{1F511}',
  '\u{E325}': '\u{1F514}',
  '\u{E24C}': '\u{1F51D}',
  '\u{E010}': '\u{270A}',
  '\u{E011}': '\u{270C}',
  '\u{E00D}': '\u{1F44A}',
  '\u{E00E}': '\u{1F44D}',
  '\u{E00F}': '\u{261D}',
  '\u{E22E}': '\u{1F446}',
  '\u{E22F}': '\u{1F447}',
  '\u{E230}': '\u{1F448}',
  '\u{E231}': '\u{1F449}',
  '\u{E41E}': '\u{1F44B}',
  '\u{E41F}': '\u{1F44F}',
  '\u{E420}': '\u{1F44C}',
  '\u{E421}': '\u{1F44E}',
  '\u{E422}': '\u{1F450}',
};

function createRegexp(map) {
  const keys = Object.keys(map);
  keys.sort((a, b) => b.length - a.length);
  return new RegExp(`(${keys.join('|')})`, 'g');
}

function softbankToUnified(text) {
  return text.replace(
    createRegexp(EMOJI_SOFTBANK_MAP),
    (_, m) => EMOJI_SOFTBANK_MAP[m],
  );
}

export default softbankToUnified;
