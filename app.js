const APP_VERSION = "20260424-capitals22";
const HIGH_SCORE_KEY = "capitalsGameHighScore";

const rounds = normalizeData([
  { country: "Afghanistan", capital: "Kabul" },
  { country: "Albania", capital: "Tirana" },
  { country: "Algeria", capital: "Algiers" },
  { country: "Andorra", capital: "Andorra la Vella" },
  { country: "Angola", capital: "Luanda" },
  { country: "Antigua and Barbuda", capital: "Saint John's" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Armenia", capital: "Yerevan" },
  { country: "Australia", capital: "Canberra" },
  { country: "Austria", capital: "Vienna" },
  { country: "Azerbaijan", capital: "Baku" },
  { country: "Bahamas", capital: "Nassau" },
  { country: "Bahrain", capital: "Manama" },
  { country: "Bangladesh", capital: "Dhaka" },
  { country: "Barbados", capital: "Bridgetown" },
  { country: "Belarus", capital: "Minsk" },
  { country: "Belgium", capital: "Brussels" },
  { country: "Belize", capital: "Belmopan" },
  { country: "Benin", capital: "Porto-Novo" },
  { country: "Bhutan", capital: "Thimphu" },
  { country: "Bolivia", capital: "Sucre" },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { country: "Botswana", capital: "Gaborone" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Brunei", capital: "Bandar Seri Begawan" },
  { country: "Bulgaria", capital: "Sofia" },
  { country: "Burkina Faso", capital: "Ouagadougou" },
  { country: "Burundi", capital: "Gitega" },
  { country: "Cabo Verde", capital: "Praia" },
  { country: "Cambodia", capital: "Phnom Penh" },
  { country: "Cameroon", capital: "Yaoundé" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Central African Republic", capital: "Bangui" },
  { country: "Chad", capital: "N'Djamena" },
  { country: "Chile", capital: "Santiago" },
  { country: "China", capital: "Beijing" },
  { country: "Colombia", capital: "Bogotá" },
  { country: "Comoros", capital: "Moroni" },
  { country: "Congo", capital: "Brazzaville" },
  { country: "Costa Rica", capital: "San José" },
  { country: "Cote d'Ivoire", capital: "Yamoussoukro" },
  { country: "Croatia", capital: "Zagreb" },
  { country: "Cuba", capital: "Havana" },
  { country: "Cyprus", capital: "Nicosia" },
  { country: "Czechia", capital: "Prague" },
  { country: "Democratic Republic of the Congo", capital: "Kinshasa" },
  { country: "Denmark", capital: "Copenhagen" },
  { country: "Djibouti", capital: "Djibouti" },
  { country: "Dominica", capital: "Roseau" },
  { country: "Dominican Republic", capital: "Santo Domingo" },
  { country: "Ecuador", capital: "Quito" },
  { country: "Egypt", capital: "Cairo" },
  { country: "El Salvador", capital: "San Salvador" },
  { country: "Equatorial Guinea", capital: "Ciudad de la Paz" },
  { country: "Eritrea", capital: "Asmara" },
  { country: "Estonia", capital: "Tallinn" },
  { country: "Eswatini", capital: "Mbabane" },
  { country: "Ethiopia", capital: "Addis Ababa" },
  { country: "Fiji", capital: "Suva" },
  { country: "Finland", capital: "Helsinki" },
  { country: "France", capital: "Paris" },
  { country: "Gabon", capital: "Libreville" },
  { country: "Gambia", capital: "Banjul" },
  { country: "Georgia", capital: "Tbilisi" },
  { country: "Germany", capital: "Berlin" },
  { country: "Ghana", capital: "Accra" },
  { country: "Greece", capital: "Athens" },
  { country: "Grenada", capital: "St. George's" },
  { country: "Guatemala", capital: "Guatemala City" },
  { country: "Guinea", capital: "Conakry" },
  { country: "Guinea-Bissau", capital: "Bissau" },
  { country: "Guyana", capital: "Georgetown" },
  { country: "Haiti", capital: "Port-au-Prince" },
  { country: "Honduras", capital: "Tegucigalpa" },
  { country: "Hungary", capital: "Budapest" },
  { country: "Iceland", capital: "Reykjavik" },
  { country: "India", capital: "New Delhi" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Iran", capital: "Tehran" },
  { country: "Iraq", capital: "Baghdad" },
  { country: "Ireland", capital: "Dublin" },
  { country: "Israel", capital: "Jerusalem" },
  { country: "Italy", capital: "Rome" },
  { country: "Jamaica", capital: "Kingston" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Jordan", capital: "Amman" },
  { country: "Kazakhstan", capital: "Astana" },
  { country: "Kenya", capital: "Nairobi" },
  { country: "Kiribati", capital: "South Tarawa" },
  { country: "Kyrgyzstan", capital: "Bishkek" },
  { country: "Kuwait", capital: "Kuwait City" },
  { country: "Laos", capital: "Vientiane" },
  { country: "Latvia", capital: "Riga" },
  { country: "Lebanon", capital: "Beirut" },
  { country: "Lesotho", capital: "Maseru" },
  { country: "Liberia", capital: "Monrovia" },
  { country: "Libya", capital: "Tripoli" },
  { country: "Liechtenstein", capital: "Vaduz" },
  { country: "Lithuania", capital: "Vilnius" },
  { country: "Luxembourg", capital: "Luxembourg" },
  { country: "Madagascar", capital: "Antananarivo" },
  { country: "Malawi", capital: "Lilongwe" },
  { country: "Malaysia", capital: "Kuala Lumpur" },
  { country: "Maldives", capital: "Malé" },
  { country: "Mali", capital: "Bamako" },
  { country: "Malta", capital: "Valletta" },
  { country: "Marshall Islands", capital: "Majuro" },
  { country: "Mauritania", capital: "Nouakchott" },
  { country: "Mauritius", capital: "Port Louis" },
  { country: "Mexico", capital: "Mexico City" },
  { country: "Micronesia", capital: "Palikir" },
  { country: "Moldova", capital: "Chișinău" },
  { country: "Monaco", capital: "Monaco" },
  { country: "Mongolia", capital: "Ulan Bator" },
  { country: "Montenegro", capital: "Podgorica" },
  { country: "Morocco", capital: "Rabat" },
  { country: "Mozambique", capital: "Maputo" },
  { country: "Myanmar", capital: "Naypyidaw" },
  { country: "Namibia", capital: "Windhoek" },
  { country: "Nauru", capital: "Yaren" },
  { country: "Nepal", capital: "Kathmandu" },
  { country: "Netherlands", capital: "Amsterdam" },
  { country: "New Zealand", capital: "Wellington" },
  { country: "Nicaragua", capital: "Managua" },
  { country: "Niger", capital: "Niamey" },
  { country: "Nigeria", capital: "Abuja" },
  { country: "North Macedonia", capital: "Skopje" },
  { country: "North Korea", capital: "Pyongyang" },
  { country: "Norway", capital: "Oslo" },
  { country: "Oman", capital: "Muscat" },
  { country: "Pakistan", capital: "Islamabad" },
  { country: "Palau", capital: "Ngerulmud" },
  { country: "Panama", capital: "Panama City" },
  { country: "Papua New Guinea", capital: "Port Moresby" },
  { country: "Paraguay", capital: "Asunción" },
  { country: "Peru", capital: "Lima" },
  { country: "Philippines", capital: "Manila" },
  { country: "Poland", capital: "Warsaw" },
  { country: "Portugal", capital: "Lisbon" },
  { country: "Qatar", capital: "Doha" },
  { country: "Romania", capital: "Bucharest" },
  { country: "Russia", capital: "Moscow" },
  { country: "Rwanda", capital: "Kigali" },
  { country: "Saint Kitts and Nevis", capital: "Basseterre" },
  { country: "Saint Lucia", capital: "Castries" },
  { country: "Saint Vincent and the Grenadines", capital: "Kingstown" },
  { country: "Samoa", capital: "Apia" },
  { country: "San Marino", capital: "City of San Marino" },
  { country: "Sao Tome and Principe", capital: "São Tomé" },
  { country: "Saudi Arabia", capital: "Riyadh" },
  { country: "Senegal", capital: "Dakar" },
  { country: "Serbia", capital: "Belgrade" },
  { country: "Seychelles", capital: "Victoria" },
  { country: "Sierra Leone", capital: "Freetown" },
  { country: "Singapore", capital: "Singapore" },
  { country: "Slovakia", capital: "Bratislava" },
  { country: "Slovenia", capital: "Ljubljana" },
  { country: "Solomon Islands", capital: "Honiara" },
  { country: "Somalia", capital: "Mogadishu" },
  { country: "South Africa", capital: "Pretoria" },
  { country: "South Korea", capital: "Seoul" },
  { country: "South Sudan", capital: "Juba" },
  { country: "Spain", capital: "Madrid" },
  { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
  { country: "Sudan", capital: "Khartoum" },
  { country: "Suriname", capital: "Paramaribo" },
  { country: "Sweden", capital: "Stockholm" },
  { country: "Switzerland", capital: "Bern" },
  { country: "Syria", capital: "Damascus" },
  { country: "Tajikistan", capital: "Dushanbe" },
  { country: "Tanzania", capital: "Dodoma" },
  { country: "Thailand", capital: "Bangkok" },
  { country: "Timor-Leste", capital: "Dili" },
  { country: "Togo", capital: "Lomé" },
  { country: "Tonga", capital: "Nuku'alofa" },
  { country: "Trinidad and Tobago", capital: "Port of Spain" },
  { country: "Tunisia", capital: "Tunis" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Turkmenistan", capital: "Ashgabat" },
  { country: "Tuvalu", capital: "Funafuti" },
  { country: "Uganda", capital: "Kampala" },
  { country: "Ukraine", capital: "Kyiv" },
  { country: "United Arab Emirates", capital: "Abu Dhabi" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States", capital: "Washington, D.C." },
  { country: "Uruguay", capital: "Montevideo" },
  { country: "Uzbekistan", capital: "Tashkent" },
  { country: "Vanuatu", capital: "Port Vila" },
  { country: "Venezuela", capital: "Caracas" },
  { country: "Vietnam", capital: "Hanoi" },
  { country: "Yemen", capital: "Sana'a" },
  { country: "Zambia", capital: "Lusaka" },
  { country: "Zimbabwe", capital: "Harare" },
  { country: "American Samoa", capital: "Pago Pago" },
  { country: "Anguilla", capital: "The Valley" },
  { country: "Aland Islands", capital: "Mariehamn" },
  { country: "Aruba", capital: "Oranjestad" },
  { country: "Bermuda", capital: "Hamilton" },
  { country: "British Virgin Islands", capital: "Road Town" },
  { country: "Cayman Islands", capital: "George Town" },
  { country: "Christmas Island", capital: "Flying Fish Cove" },
  { country: "Cook Islands", capital: "Avarua" },
  { country: "Cocos Islands", capital: "West Island" },
  { country: "Curacao", capital: "Willemstad" },
  { country: "Falkland Islands", capital: "Stanley" },
  { country: "Faroe Islands", capital: "Tórshavn" },
  { country: "French Polynesia", capital: "Papeetē" },
  { country: "Gibraltar", capital: "Gibraltar" },
  { country: "Greenland", capital: "Nuuk" },
  { country: "Guam", capital: "Hagåtña" },
  { country: "Guernsey", capital: "St. Peter Port" },
  { country: "Hong Kong", capital: "City of Victoria" },
  { country: "British Indian Ocean Territory", capital: "Diego Garcia" },
  { country: "Isle of Man", capital: "Douglas" },
  { country: "Jersey", capital: "Saint Helier" },
  { country: "Kosovo", capital: "Pristina" },
  { country: "Macau", capital: "Macau" },
  { country: "Montserrat", capital: "Plymouth" },
  { country: "New Caledonia", capital: "Nouméa" },
  { country: "Norfolk Island", capital: "Kingston" },
  { country: "Niue", capital: "Alofi" },
  { country: "Northern Mariana Islands", capital: "Saipan" },
  { country: "Palestine", capital: "Ramallah" },
  { country: "Pitcairn Islands", capital: "Adamstown" },
  { country: "Puerto Rico", capital: "San Juan" },
  { country: "Saint Barthelemy", capital: "Gustavia" },
  { country: "Saint Helena, Ascension and Tristan da Cunha", capital: "Jamestown" },
  { country: "Sint Maarten", capital: "Philipsburg" },
  { country: "South Georgia and the South Sandwich Islands", capital: "King Edward Point" },
  { country: "French Southern Territories", capital: "Port-aux-Français" },
  { country: "Taiwan", capital: "Taipei" },
  { country: "Tokelau", capital: "Fakaofo" },
  { country: "Turks and Caicos Islands", capital: "Cockburn Town" },
  { country: "U.S. Virgin Islands", capital: "Charlotte Amalie" },
  { country: "Vatican City", capital: "Vatican City" },
  { country: "Wallis and Futuna", capital: "Mata-Utu" },
  { country: "Western Sahara", capital: "El Aaiún" }
]);

const nearbyCapitalMap = normalizeData({
  "Afghanistan": ["Dhaka", "Islamabad", "Kathmandu", "MalÃ©", "New Delhi", "Sri Jayawardenepura Kotte", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Albania": ["Belgrade", "Bucharest", "Podgorica", "Pristina", "Sarajevo", "Skopje", "Sofia", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Algeria": ["Cairo", "El AaiÃºn", "Khartoum", "Rabat", "Tripoli", "Tunis", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"],
  "Andorra": ["Athens", "City of San Marino", "Gibraltar", "Lisbon", "Madrid", "Nicosia", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Angola": ["Bangui", "Brazzaville", "Ciudad de la Paz", "Juba", "Kinshasa", "Libreville", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Antigua and Barbuda": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Argentina": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Armenia": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat"],
  "Australia": ["Flying Fish Cove", "Kingston", "Wellington", "Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "HagÃ¥tÃ±a", "Honiara", "Majuro"],
  "Austria": ["Bratislava", "Budapest", "Ljubljana", "Prague", "Warsaw", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Brussels"],
  "Azerbaijan": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Bahamas": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Bahrain": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Muscat", "Ramallah"],
  "Bangladesh": ["Islamabad", "Kabul", "Kathmandu", "MalÃ©", "New Delhi", "Sri Jayawardenepura Kotte", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Barbados": ["Basseterre", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Belarus": ["ChiÈ™inÄƒu", "Kyiv", "Moscow", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Bratislava", "Brussels", "Bucharest"],
  "Belgium": ["Amsterdam", "Berlin", "Bern", "Luxembourg", "Monaco", "Paris", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Belize": ["Guatemala City", "Managua", "Panama City", "San JosÃ©", "San Salvador", "Tegucigalpa", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Benin": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey"],
  "Bhutan": ["Dhaka", "Islamabad", "Kabul", "Kathmandu", "MalÃ©", "New Delhi", "Sri Jayawardenepura Kotte", "Tehran", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Bolivia": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley"],
  "Bosnia and Herzegovina": ["Belgrade", "Bucharest", "Podgorica", "Pristina", "Skopje", "Sofia", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Botswana": ["Harare", "Maseru", "Mbabane", "Pretoria", "Windhoek", "Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
  "Brazil": ["AsunciÃ³n", "BogotÃ¡", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Brunei": ["Bangkok", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Bulgaria": ["Belgrade", "Bucharest", "Podgorica", "Pristina", "Sarajevo", "Skopje", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Burkina Faso": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey"],
  "Burundi": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Cabo Verde": [],
  "Cambodia": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Cameroon": ["Bangui", "Brazzaville", "Ciudad de la Paz", "Juba", "Kinshasa", "Libreville", "Luanda", "N'Djamena", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Canada": ["Hamilton", "Mexico City", "Nuuk", "Washington, D.C.", "AsunciÃ³n", "Basseterre", "Belmopan", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires", "Caracas"],
  "Central African Republic": ["Brazzaville", "Ciudad de la Paz", "Juba", "Kinshasa", "Libreville", "Luanda", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Chad": ["Bangui", "Brazzaville", "Ciudad de la Paz", "Juba", "Kinshasa", "Libreville", "Luanda", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Chile": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Stanley", "Sucre"],
  "China": ["City of Victoria", "Macau", "Pyongyang", "Seoul", "Taipei", "Tokyo", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "Colombia": ["AsunciÃ³n", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Comoros": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo"],
  "Congo": ["Bangui", "Ciudad de la Paz", "Juba", "Kinshasa", "Libreville", "Luanda", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Costa Rica": ["Belmopan", "Guatemala City", "Managua", "Panama City", "San Salvador", "Tegucigalpa", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Cote d'Ivoire": [],
  "Croatia": ["Belgrade", "Bucharest", "Podgorica", "Pristina", "Sarajevo", "Skopje", "Sofia", "Tirana", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Cuba": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Cyprus": ["Andorra la Vella", "Athens", "City of San Marino", "Gibraltar", "Lisbon", "Madrid", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Czechia": ["Bratislava", "Budapest", "Ljubljana", "Vienna", "Warsaw", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Brussels"],
  "Democratic Republic of the Congo": ["Bangui", "Brazzaville", "Ciudad de la Paz", "Juba", "Libreville", "Luanda", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Denmark": ["Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Djibouti": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Dominica": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Dominican Republic": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Ecuador": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Santiago", "Stanley", "Sucre"],
  "Egypt": ["Algiers", "El AaiÃºn", "Khartoum", "Rabat", "Tripoli", "Tunis", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"],
  "El Salvador": ["Belmopan", "Guatemala City", "Managua", "Panama City", "San JosÃ©", "Tegucigalpa", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Equatorial Guinea": ["Bangui", "Brazzaville", "Juba", "Kinshasa", "Libreville", "Luanda", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Eritrea": ["Addis Ababa", "Antananarivo", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Estonia": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "TÃ³rshavn"],
  "Eswatini": ["Gaborone", "Harare", "Maseru", "Pretoria", "Windhoek", "Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
  "Ethiopia": ["Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Fiji": ["Honiara", "NoumÃ©a", "Port Moresby", "Port Vila", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo", "Flying Fish Cove", "Funafuti"],
  "Finland": ["Copenhagen", "Douglas", "Dublin", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "France": ["Amsterdam", "Berlin", "Bern", "Brussels", "Luxembourg", "Monaco", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Gabon": ["Bangui", "Brazzaville", "Ciudad de la Paz", "Juba", "Kinshasa", "Luanda", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Gambia": ["Abuja", "Accra", "Bamako", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Georgia": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat"],
  "Germany": ["Amsterdam", "Bern", "Brussels", "Luxembourg", "Monaco", "Paris", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Ghana": ["Abuja", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Greece": ["Andorra la Vella", "City of San Marino", "Gibraltar", "Lisbon", "Madrid", "Nicosia", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Grenada": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Guatemala": ["Belmopan", "Managua", "Panama City", "San JosÃ©", "San Salvador", "Tegucigalpa", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Guinea": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Guinea-Bissau": ["Abuja", "Accra", "Bamako", "Banjul", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Guyana": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Haiti": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Honduras": ["Belmopan", "Guatemala City", "Managua", "Panama City", "San JosÃ©", "San Salvador", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Hungary": ["Bratislava", "Ljubljana", "Prague", "Vienna", "Warsaw", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Brussels"],
  "Iceland": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "India": ["Dhaka", "Islamabad", "Kabul", "Kathmandu", "MalÃ©", "Sri Jayawardenepura Kotte", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Indonesia": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Iran": ["Dhaka", "Islamabad", "Kabul", "Kathmandu", "MalÃ©", "New Delhi", "Sri Jayawardenepura Kotte", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Iraq": ["Abu Dhabi", "Amman", "Ankara", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Ireland": ["Copenhagen", "Douglas", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Israel": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Italy": ["Andorra la Vella", "Athens", "City of San Marino", "Gibraltar", "Lisbon", "Madrid", "Nicosia", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Jamaica": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Japan": ["Beijing", "City of Victoria", "Macau", "Pyongyang", "Seoul", "Taipei", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "Jordan": ["Abu Dhabi", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Kazakhstan": ["Ashgabat", "Bishkek", "Dushanbe", "Tashkent", "Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Bandar Seri Begawan", "Bangkok", "Beijing"],
  "Kenya": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo"],
  "Kiribati": ["HagÃ¥tÃ±a", "Majuro", "Ngerulmud", "Palikir", "Saipan", "Yaren", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Kyrgyzstan": ["Ashgabat", "Astana", "Dushanbe", "Tashkent", "Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Bandar Seri Begawan", "Bangkok", "Beijing"],
  "Kuwait": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Manama", "Muscat", "Ramallah"],
  "Laos": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Abu Dhabi", "Amman"],
  "Latvia": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Lebanon": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Lesotho": ["Gaborone", "Harare", "Mbabane", "Pretoria", "Windhoek", "Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
  "Liberia": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Niamey", "Nouakchott"],
  "Libya": ["Algiers", "Cairo", "El AaiÃºn", "Khartoum", "Rabat", "Tunis", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"],
  "Liechtenstein": ["Amsterdam", "Berlin", "Bern", "Brussels", "Luxembourg", "Monaco", "Paris", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Lithuania": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn"],
  "Luxembourg": ["Amsterdam", "Berlin", "Bern", "Brussels", "Monaco", "Paris", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Madagascar": ["Addis Ababa", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Malawi": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lusaka", "Maputo", "Mogadishu"],
  "Malaysia": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Jakarta", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Maldives": ["Dhaka", "Islamabad", "Kabul", "Kathmandu", "New Delhi", "Sri Jayawardenepura Kotte", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Mali": ["Abuja", "Accra", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Malta": ["Andorra la Vella", "Athens", "City of San Marino", "Gibraltar", "Lisbon", "Madrid", "Nicosia", "Rome", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Marshall Islands": ["HagÃ¥tÃ±a", "Ngerulmud", "Palikir", "Saipan", "South Tarawa", "Yaren", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Mauritania": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey"],
  "Mauritius": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo"],
  "Mexico": ["Hamilton", "Nuuk", "Ottawa", "Washington, D.C.", "AsunciÃ³n", "Basseterre", "Belmopan", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires", "Caracas"],
  "Micronesia": ["HagÃ¥tÃ±a", "Majuro", "Ngerulmud", "Saipan", "South Tarawa", "Yaren", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Moldova": ["Kyiv", "Minsk", "Moscow", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Bratislava", "Brussels", "Bucharest"],
  "Monaco": ["Amsterdam", "Berlin", "Bern", "Brussels", "Luxembourg", "Paris", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Mongolia": ["Beijing", "City of Victoria", "Macau", "Pyongyang", "Seoul", "Taipei", "Tokyo", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "Montenegro": ["Belgrade", "Bucharest", "Pristina", "Sarajevo", "Skopje", "Sofia", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Morocco": ["Algiers", "Cairo", "El AaiÃºn", "Khartoum", "Tripoli", "Tunis", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"],
  "Mozambique": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Mogadishu"],
  "Myanmar": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Namibia": ["Gaborone", "Harare", "Maseru", "Mbabane", "Pretoria", "Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
  "Nauru": ["HagÃ¥tÃ±a", "Majuro", "Ngerulmud", "Palikir", "Saipan", "South Tarawa", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Nepal": ["Dhaka", "Islamabad", "Kabul", "MalÃ©", "New Delhi", "Sri Jayawardenepura Kotte", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Netherlands": ["Berlin", "Bern", "Brussels", "Luxembourg", "Monaco", "Paris", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "New Zealand": ["Canberra", "Flying Fish Cove", "Kingston", "Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "HagÃ¥tÃ±a", "Honiara", "Majuro"],
  "Nicaragua": ["Belmopan", "Guatemala City", "Panama City", "San JosÃ©", "San Salvador", "Tegucigalpa", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Niger": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Nouakchott"],
  "Nigeria": ["Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "North Macedonia": ["Belgrade", "Bucharest", "Podgorica", "Pristina", "Sarajevo", "Sofia", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "North Korea": ["Beijing", "City of Victoria", "Macau", "Seoul", "Taipei", "Tokyo", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "Norway": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Oman": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Ramallah"],
  "Pakistan": ["Dhaka", "Kabul", "Kathmandu", "MalÃ©", "New Delhi", "Sri Jayawardenepura Kotte", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Palau": ["HagÃ¥tÃ±a", "Majuro", "Palikir", "Saipan", "South Tarawa", "Yaren", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Panama": ["Belmopan", "Guatemala City", "Managua", "San JosÃ©", "San Salvador", "Tegucigalpa", "AsunciÃ³n", "Basseterre", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires"],
  "Papua New Guinea": ["Honiara", "NoumÃ©a", "Port Vila", "Suva", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo", "Flying Fish Cove", "Funafuti"],
  "Paraguay": ["BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Peru": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Philippines": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Poland": ["Bratislava", "Budapest", "Ljubljana", "Prague", "Vienna", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Brussels"],
  "Portugal": ["Andorra la Vella", "Athens", "City of San Marino", "Gibraltar", "Madrid", "Nicosia", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Qatar": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Romania": ["Belgrade", "Podgorica", "Pristina", "Sarajevo", "Skopje", "Sofia", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Russia": ["ChiÈ™inÄƒu", "Kyiv", "Minsk", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Bratislava", "Brussels", "Bucharest"],
  "Rwanda": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Saint Kitts and Nevis": ["Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Saint Lucia": ["Basseterre", "Bridgetown", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Saint Vincent and the Grenadines": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Samoa": ["Adamstown", "Alofi", "Avarua", "Fakaofo", "Funafuti", "Mata-Utu", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "San Marino": ["Andorra la Vella", "Athens", "Gibraltar", "Lisbon", "Madrid", "Nicosia", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Sao Tome and Principe": [],
  "Saudi Arabia": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat"],
  "Senegal": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Freetown", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Serbia": ["Bucharest", "Podgorica", "Pristina", "Sarajevo", "Skopje", "Sofia", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Seychelles": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo"],
  "Sierra Leone": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Jamestown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Singapore": ["Bandar Seri Begawan", "Bangkok", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Vientiane", "Abu Dhabi", "Amman"],
  "Slovakia": ["Budapest", "Ljubljana", "Prague", "Vienna", "Warsaw", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Brussels"],
  "Slovenia": ["Bratislava", "Budapest", "Prague", "Vienna", "Warsaw", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Brussels"],
  "Solomon Islands": ["NoumÃ©a", "Port Moresby", "Port Vila", "Suva", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo", "Flying Fish Cove", "Funafuti"],
  "Somalia": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo"],
  "South Africa": ["Gaborone", "Harare", "Maseru", "Mbabane", "Windhoek", "Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
  "South Korea": ["Beijing", "City of Victoria", "Macau", "Pyongyang", "Taipei", "Tokyo", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "South Sudan": ["Bangui", "Brazzaville", "Ciudad de la Paz", "Kinshasa", "Libreville", "Luanda", "N'Djamena", "YaoundÃ©", "Abuja", "Accra", "Addis Ababa", "Algiers"],
  "Spain": ["Andorra la Vella", "Athens", "City of San Marino", "Gibraltar", "Lisbon", "Nicosia", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Sri Lanka": ["Dhaka", "Islamabad", "Kabul", "Kathmandu", "MalÃ©", "New Delhi", "Tehran", "Thimphu", "Abu Dhabi", "Amman", "Ankara", "Ashgabat"],
  "Sudan": ["Algiers", "Cairo", "El AaiÃºn", "Rabat", "Tripoli", "Tunis", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"],
  "Suriname": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Sweden": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Tallinn", "TÃ³rshavn"],
  "Switzerland": ["Amsterdam", "Berlin", "Brussels", "Luxembourg", "Monaco", "Paris", "Vaduz", "Andorra la Vella", "Athens", "Belgrade", "Bratislava", "Bucharest"],
  "Syria": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Tajikistan": ["Ashgabat", "Astana", "Bishkek", "Tashkent", "Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Bandar Seri Begawan", "Bangkok", "Beijing"],
  "Tanzania": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Thailand": ["Bandar Seri Begawan", "Dili", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Timor-Leste": ["Bandar Seri Begawan", "Bangkok", "Hanoi", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Togo": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "Jamestown", "Monrovia", "Niamey", "Nouakchott"],
  "Tonga": ["Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "Mata-Utu", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Trinidad and Tobago": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Tunisia": ["Algiers", "Cairo", "El AaiÃºn", "Khartoum", "Rabat", "Tripoli", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"],
  "Turkey": ["Abu Dhabi", "Amman", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "Turkmenistan": ["Astana", "Bishkek", "Dushanbe", "Tashkent", "Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Bandar Seri Begawan", "Bangkok", "Beijing"],
  "Tuvalu": ["Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Mata-Utu", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Uganda": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Ukraine": ["ChiÈ™inÄƒu", "Minsk", "Moscow", "Amsterdam", "Andorra la Vella", "Athens", "Belgrade", "Berlin", "Bern", "Bratislava", "Brussels", "Bucharest"],
  "United Arab Emirates": ["Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat", "Ramallah"],
  "United Kingdom": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "United States": ["Hamilton", "Mexico City", "Nuuk", "Ottawa", "AsunciÃ³n", "Basseterre", "Belmopan", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires", "Caracas"],
  "Uruguay": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Uzbekistan": ["Ashgabat", "Astana", "Bishkek", "Dushanbe", "Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Bandar Seri Begawan", "Bangkok", "Beijing"],
  "Vanuatu": ["Honiara", "NoumÃ©a", "Port Moresby", "Suva", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo", "Flying Fish Cove", "Funafuti"],
  "Venezuela": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Stanley", "Sucre"],
  "Vietnam": ["Bandar Seri Begawan", "Bangkok", "Dili", "Jakarta", "Kuala Lumpur", "Manila", "Naypyidaw", "Phnom Penh", "Singapore", "Vientiane", "Abu Dhabi", "Amman"],
  "Yemen": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat"],
  "Zambia": ["Addis Ababa", "Antananarivo", "Asmara", "Diego Garcia", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Maputo", "Mogadishu"],
  "Zimbabwe": ["Gaborone", "Maseru", "Mbabane", "Pretoria", "Windhoek", "Abuja", "Accra", "Addis Ababa", "Algiers", "Antananarivo", "Asmara", "Bamako"],
  "American Samoa": ["Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "Mata-Utu", "Nuku'alofa", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Anguilla": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Aland Islands": [],
  "Aruba": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Philipsburg", "Plymouth", "Port of Spain"],
  "Bermuda": ["Mexico City", "Nuuk", "Ottawa", "Washington, D.C.", "AsunciÃ³n", "Basseterre", "Belmopan", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires", "Caracas"],
  "British Virgin Islands": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Cayman Islands": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "Christmas Island": ["Canberra", "Kingston", "Wellington", "Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "HagÃ¥tÃ±a", "Honiara", "Majuro"],
  "Cook Islands": ["Adamstown", "Alofi", "Apia", "Fakaofo", "Funafuti", "Mata-Utu", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Cocos Islands": [],
  "Curacao": [],
  "Falkland Islands": ["AsunciÃ³n", "BogotÃ¡", "BrasÃ­lia", "Buenos Aires", "Caracas", "Georgetown", "Lima", "Montevideo", "Paramaribo", "Quito", "Santiago", "Sucre"],
  "Faroe Islands": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn"],
  "French Polynesia": ["Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "Mata-Utu", "Nuku'alofa", "Pago Pago", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Gibraltar": ["Andorra la Vella", "Athens", "City of San Marino", "Lisbon", "Madrid", "Nicosia", "Rome", "Valletta", "Vatican City", "Amsterdam", "Belgrade", "Berlin"],
  "Greenland": ["Hamilton", "Mexico City", "Ottawa", "Washington, D.C.", "AsunciÃ³n", "Basseterre", "Belmopan", "BogotÃ¡", "BrasÃ­lia", "Bridgetown", "Buenos Aires", "Caracas"],
  "Guam": ["Majuro", "Ngerulmud", "Palikir", "Saipan", "South Tarawa", "Yaren", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Guernsey": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Hong Kong": ["Beijing", "Macau", "Pyongyang", "Seoul", "Taipei", "Tokyo", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "British Indian Ocean Territory": ["Addis Ababa", "Antananarivo", "Asmara", "Djibouti", "Dodoma", "Gitega", "Kampala", "Kigali", "Lilongwe", "Lusaka", "Maputo", "Mogadishu"],
  "Isle of Man": ["Copenhagen", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "Saint Helier", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Jersey": ["Copenhagen", "Douglas", "Dublin", "Helsinki", "London", "Oslo", "Reykjavik", "Riga", "St. Peter Port", "Stockholm", "Tallinn", "TÃ³rshavn"],
  "Kosovo": ["Belgrade", "Bucharest", "Podgorica", "Sarajevo", "Skopje", "Sofia", "Tirana", "Zagreb", "Amsterdam", "Andorra la Vella", "Athens", "Berlin"],
  "Macau": ["Beijing", "City of Victoria", "Pyongyang", "Seoul", "Taipei", "Tokyo", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "Montserrat": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Port of Spain"],
  "New Caledonia": ["Honiara", "Port Moresby", "Port Vila", "Suva", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo", "Flying Fish Cove", "Funafuti"],
  "Norfolk Island": ["Canberra", "Flying Fish Cove", "Wellington", "Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "HagÃ¥tÃ±a", "Honiara", "Majuro"],
  "Niue": ["Adamstown", "Apia", "Avarua", "Fakaofo", "Funafuti", "Mata-Utu", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Northern Mariana Islands": ["HagÃ¥tÃ±a", "Majuro", "Ngerulmud", "Palikir", "South Tarawa", "Yaren", "Adamstown", "Alofi", "Apia", "Avarua", "Canberra", "Fakaofo"],
  "Palestine": ["Abu Dhabi", "Amman", "Ankara", "Baghdad", "Baku", "Beirut", "Damascus", "Doha", "Jerusalem", "Kuwait City", "Manama", "Muscat"],
  "Pitcairn Islands": ["Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "Mata-Utu", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Puerto Rico": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth"],
  "Saint Barthelemy": [],
  "Saint Helena, Ascension and Tristan da Cunha": ["Abuja", "Accra", "Bamako", "Banjul", "Bissau", "Conakry", "Dakar", "Freetown", "LomÃ©", "Monrovia", "Niamey", "Nouakchott"],
  "Sint Maarten": ["Basseterre", "Bridgetown", "Castries", "Cockburn Town", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Plymouth", "Port of Spain"],
  "South Georgia and the South Sandwich Islands": [],
  "French Southern Territories": [],
  "Taiwan": ["Beijing", "City of Victoria", "Macau", "Pyongyang", "Seoul", "Tokyo", "Ulan Bator", "Abu Dhabi", "Amman", "Ankara", "Ashgabat", "Astana"],
  "Tokelau": ["Adamstown", "Alofi", "Apia", "Avarua", "Funafuti", "Mata-Utu", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Turks and Caicos Islands": ["Basseterre", "Bridgetown", "Castries", "George Town", "Havana", "Kingston", "Kingstown", "Nassau", "Oranjestad", "Philipsburg", "Plymouth", "Port of Spain"],
  "U.S. Virgin Islands": [],
  "Vatican City": ["Andorra la Vella", "Athens", "City of San Marino", "Gibraltar", "Lisbon", "Madrid", "Nicosia", "Rome", "Valletta", "Amsterdam", "Belgrade", "Berlin"],
  "Wallis and Futuna": ["Adamstown", "Alofi", "Apia", "Avarua", "Fakaofo", "Funafuti", "Nuku'alofa", "Pago Pago", "PapeetÄ“", "Canberra", "Flying Fish Cove", "HagÃ¥tÃ±a"],
  "Western Sahara": ["Algiers", "Cairo", "Khartoum", "Rabat", "Tripoli", "Tunis", "Abuja", "Accra", "Addis Ababa", "Antananarivo", "Asmara", "Bamako"]
});
const domesticCityMap = normalizeData({
  "Afghanistan": ["Herat", "Kandahar", "Mazar-i-Sharif"],
  "Algeria": ["Oran", "Constantine", "Annaba"],
  "Angola": ["Huambo", "Lobito", "Benguela"],
  "Argentina": ["Córdoba", "Rosario", "Mendoza"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth"],
  "Austria": ["Salzburg", "Graz", "Innsbruck"],
  "Bangladesh": ["Chattogram", "Khulna", "Rajshahi"],
  "Belgium": ["Antwerp", "Ghent", "Liège"],
  "Bolivia": ["Santa Cruz de la Sierra", "El Alto", "Cochabamba"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Salvador", "Recife"],
  "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary"],
  "Chile": ["Valparaíso", "Concepción", "Antofagasta"],
  "China": ["Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
  "Colombia": ["Medellín", "Cali", "Barranquilla"],
  "Costa Rica": ["Limón", "Alajuela", "Cartago"],
  "Cuba": ["Santiago de Cuba", "Camagüey", "Holguín"],
  "Czechia": ["Brno", "Ostrava", "Plzeň"],
  "Democratic Republic of the Congo": ["Lubumbashi", "Mbuji-Mayi", "Kisangani"],
  "Denmark": ["Aarhus", "Odense", "Aalborg"],
  "Dominican Republic": ["Santiago de los Caballeros", "La Romana", "San Pedro de Macorís"],
  "Ecuador": ["Guayaquil", "Cuenca", "Manta"],
  "Egypt": ["Alexandria", "Giza", "Luxor"],
  "Ethiopia": ["Dire Dawa", "Mekelle", "Bahir Dar"],
  "Finland": ["Espoo", "Tampere", "Turku"],
  "France": ["Marseille", "Lyon", "Toulouse", "Nice"],
  "Germany": ["Hamburg", "Munich", "Cologne", "Frankfurt"],
  "Ghana": ["Kumasi", "Tamale", "Takoradi"],
  "Greece": ["Thessaloniki", "Patras", "Heraklion"],
  "Guatemala": ["Quetzaltenango", "Escuintla", "Puerto Barrios"],
  "Haiti": ["Cap-Haïtien", "Les Cayes", "Gonaïves"],
  "Honduras": ["San Pedro Sula", "La Ceiba", "Choloma"],
  "Hungary": ["Debrecen", "Szeged", "Miskolc"],
  "Iceland": ["Akureyri", "Keflavík", "Selfoss"],
  "India": ["Mumbai", "Bengaluru", "Chennai", "Kolkata"],
  "Indonesia": ["Surabaya", "Bandung", "Medan", "Makassar"],
  "Iran": ["Mashhad", "Isfahan", "Shiraz", "Tabriz"],
  "Iraq": ["Basra", "Mosul", "Erbil"],
  "Ireland": ["Cork", "Limerick", "Galway"],
  "Israel": ["Tel Aviv", "Haifa", "Eilat"],
  "Italy": ["Milan", "Naples", "Turin", "Palermo"],
  "Jamaica": ["Montego Bay", "Spanish Town", "Portmore"],
  "Japan": ["Osaka", "Yokohama", "Nagoya", "Sapporo"],
  "Jordan": ["Aqaba", "Irbid", "Zarqa"],
  "Kazakhstan": ["Almaty", "Shymkent", "Karaganda"],
  "Kenya": ["Mombasa", "Kisumu", "Nakuru"],
  "Malaysia": ["George Town", "Johor Bahru", "Ipoh"],
  "Mexico": ["Guadalajara", "Monterrey", "Tijuana", "Cancún"],
  "Morocco": ["Casablanca", "Marrakesh", "Tangier"],
  "Mozambique": ["Beira", "Nampula", "Matola"],
  "Myanmar": ["Yangon", "Mandalay", "Mawlamyine"],
  "Nepal": ["Pokhara", "Lalitpur", "Biratnagar"],
  "Netherlands": ["Rotterdam", "The Hague", "Utrecht"],
  "New Zealand": ["Auckland", "Christchurch", "Hamilton"],
  "Nigeria": ["Lagos", "Kano", "Ibadan", "Port Harcourt"],
  "Norway": ["Bergen", "Trondheim", "Stavanger"],
  "Pakistan": ["Karachi", "Lahore", "Faisalabad", "Peshawar"],
  "Panama": ["Colón", "David", "Santiago de Veraguas"],
  "Peru": ["Arequipa", "Cusco", "Trujillo"],
  "Philippines": ["Cebu City", "Davao", "Quezon City"],
  "Poland": ["Kraków", "Łódź", "Wrocław", "Gdańsk"],
  "Portugal": ["Porto", "Braga", "Coimbra"],
  "Romania": ["Cluj-Napoca", "Timișoara", "Iași"],
  "Russia": ["Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan"],
  "Saudi Arabia": ["Jeddah", "Mecca", "Medina", "Dammam"],
  "South Africa": ["Cape Town", "Johannesburg", "Durban", "Bloemfontein"],
  "South Korea": ["Busan", "Incheon", "Daegu", "Gwangju"],
  "Spain": ["Barcelona", "Valencia", "Seville", "Bilbao"],
  "Sri Lanka": ["Colombo", "Kandy", "Galle"],
  "Sweden": ["Gothenburg", "Malmö", "Uppsala"],
  "Switzerland": ["Zurich", "Geneva", "Basel", "Lausanne"],
  "Tanzania": ["Dar es Salaam", "Mwanza", "Arusha", "Zanzibar City"],
  "Thailand": ["Chiang Mai", "Pattaya", "Phuket"],
  "Tunisia": ["Sfax", "Sousse", "Bizerte"],
  "Turkey": ["Istanbul", "Izmir", "Bursa", "Antalya"],
  "Uganda": ["Entebbe", "Gulu", "Mbarara"],
  "Ukraine": ["Kharkiv", "Odesa", "Lviv", "Dnipro"],
  "United Arab Emirates": ["Dubai", "Sharjah", "Ajman"],
  "United Kingdom": ["Manchester", "Birmingham", "Glasgow", "Liverpool"],
  "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
  "Uzbekistan": ["Samarkand", "Bukhara", "Namangan"],
  "Venezuela": ["Maracaibo", "Valencia", "Barquisimeto"],
  "Vietnam": ["Ho Chi Minh City", "Da Nang", "Haiphong"],
  "Zimbabwe": ["Bulawayo", "Mutare", "Gweru"],
  "American Samoa": ["Tafuna", "Leone"],
  "Aruba": ["San Nicolas", "Noord"],
  "Bermuda": ["St. George's", "Somerset Village"],
  "Cayman Islands": ["West Bay", "Bodden Town"],
  "Curacao": ["Otrobanda", "Scharloo"],
  "Faroe Islands": ["Klaksvík", "Runavík"],
  "French Polynesia": ["Faaa", "Punaauia"],
  "Guam": ["Dededo", "Tamuning"],
  "Hong Kong": ["Kowloon", "Tsuen Wan"],
  "Macau": ["Taipa", "Coloane"],
  "Martinique": ["Le Lamentin", "Le Robert"],
  "New Caledonia": ["Mont-Dore", "Dumbéa"],
  "Puerto Rico": ["Ponce", "Mayagüez", "Bayamón"],
  "Sint Maarten": ["Lowlands", "Simpson Bay"],
  "Taiwan": ["Kaohsiung", "Taichung", "Tainan"],
  "U.S. Virgin Islands": ["Christiansted", "Frederiksted"]
});
const countryCodeMap = {
  "Afghanistan": "AF",
  "Albania": "AL",
  "Algeria": "DZ",
  "Andorra": "AD",
  "Angola": "AO",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bahamas": "BS",
  "Bahrain": "BH",
  "Bangladesh": "BD",
  "Barbados": "BB",
  "Belarus": "BY",
  "Belgium": "BE",
  "Belize": "BZ",
  "Benin": "BJ",
  "Bhutan": "BT",
  "Bolivia": "BO",
  "Bosnia and Herzegovina": "BA",
  "Botswana": "BW",
  "Brazil": "BR",
  "Brunei": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Cabo Verde": "CV",
  "Cambodia": "KH",
  "Cameroon": "CM",
  "Canada": "CA",
  "Central African Republic": "CF",
  "Chad": "TD",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Comoros": "KM",
  "Congo": "CG",
  "Costa Rica": "CR",
  "Cote d'Ivoire": "CI",
  "Croatia": "HR",
  "Cuba": "CU",
  "Cyprus": "CY",
  "Czechia": "CZ",
  "Democratic Republic of the Congo": "CD",
  "Denmark": "DK",
  "Djibouti": "DJ",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "Egypt": "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Eswatini": "SZ",
  "Ethiopia": "ET",
  "Fiji": "FJ",
  "Finland": "FI",
  "France": "FR",
  "Gabon": "GA",
  "Gambia": "GM",
  "Georgia": "GE",
  "Germany": "DE",
  "Ghana": "GH",
  "Greece": "GR",
  "Grenada": "GD",
  "Guatemala": "GT",
  "Guinea": "GN",
  "Guinea-Bissau": "GW",
  "Guyana": "GY",
  "Haiti": "HT",
  "Honduras": "HN",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Israel": "IL",
  "Italy": "IT",
  "Jamaica": "JM",
  "Japan": "JP",
  "Jordan": "JO",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kiribati": "KI",
  "Kyrgyzstan": "KG",
  "Kuwait": "KW",
  "Laos": "LA",
  "Latvia": "LV",
  "Lebanon": "LB",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Libya": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Madagascar": "MG",
  "Malawi": "MW",
  "Malaysia": "MY",
  "Maldives": "MV",
  "Mali": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH",
  "Mauritania": "MR",
  "Mauritius": "MU",
  "Mexico": "MX",
  "Micronesia": "FM",
  "Moldova": "MD",
  "Monaco": "MC",
  "Mongolia": "MN",
  "Montenegro": "ME",
  "Morocco": "MA",
  "Mozambique": "MZ",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nauru": "NR",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Zealand": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE",
  "Nigeria": "NG",
  "North Macedonia": "MK",
  "North Korea": "KP",
  "Norway": "NO",
  "Oman": "OM",
  "Pakistan": "PK",
  "Palau": "PW",
  "Panama": "PA",
  "Papua New Guinea": "PG",
  "Paraguay": "PY",
  "Peru": "PE",
  "Philippines": "PH",
  "Poland": "PL",
  "Portugal": "PT",
  "Qatar": "QA",
  "Romania": "RO",
  "Russia": "RU",
  "Rwanda": "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  "Samoa": "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL",
  "Singapore": "SG",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "Solomon Islands": "SB",
  "Somalia": "SO",
  "South Africa": "ZA",
  "South Korea": "KR",
  "South Sudan": "SS",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "Sudan": "SD",
  "Suriname": "SR",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Syria": "SY",
  "Tajikistan": "TJ",
  "Tanzania": "TZ",
  "Thailand": "TH",
  "Timor-Leste": "TL",
  "Togo": "TG",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT",
  "Tunisia": "TN",
  "Turkey": "TR",
  "Turkmenistan": "TM",
  "Tuvalu": "TV",
  "Uganda": "UG",
  "Ukraine": "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  "Uruguay": "UY",
  "Uzbekistan": "UZ",
  "Vanuatu": "VU",
  "Venezuela": "VE",
  "Vietnam": "VN",
  "Yemen": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW",
  "American Samoa": "AS",
  "Antarctica": "AQ",
  "Anguilla": "AI",
  "Aland Islands": "AX",
  "Aruba": "AW",
  "Bermuda": "BM",
  "British Virgin Islands": "VG",
  "Cayman Islands": "KY",
  "Christmas Island": "CX",
  "Cook Islands": "CK",
  "Cocos Islands": "CC",
  "Curacao": "CW",
  "Falkland Islands": "FK",
  "Faroe Islands": "FO",
  "French Polynesia": "PF",
  "Gibraltar": "GI",
  "Greenland": "GL",
  "Guam": "GU",
  "Guernsey": "GG",
  "Hong Kong": "HK",
  "British Indian Ocean Territory": "IO",
  "Isle of Man": "IM",
  "Jersey": "JE",
  "Kosovo": "XK",
  "Macau": "MO",
  "Montserrat": "MS",
  "New Caledonia": "NC",
  "Norfolk Island": "NF",
  "Niue": "NU",
  "Northern Mariana Islands": "MP",
  "Palestine": "PS",
  "Pitcairn Islands": "PN",
  "Puerto Rico": "PR",
  "Saint Barthelemy": "BL",
  "Saint Helena, Ascension and Tristan da Cunha": "SH",
  "Sint Maarten": "SX",
  "South Georgia and the South Sandwich Islands": "GS",
  "French Southern Territories": "TF",
  "Taiwan": "TW",
  "Tokelau": "TK",
  "Turks and Caicos Islands": "TC",
  "U.S. Virgin Islands": "VI",
  "Vatican City": "VA",
  "Wallis and Futuna": "WF",
  "Western Sahara": "EH"
};
const capitalPool = [...new Set(rounds.map((round) => round.capital))];

const promptCountryEl = document.getElementById("prompt-country");
const promptFlagEl = document.getElementById("prompt-flag");
const strikeEls = [...document.querySelectorAll("#strike-track .strike-pill")];
const optionsGridEl = document.getElementById("options-grid");
const scoreEl = document.getElementById("score");
const scoreContextEl = document.getElementById("score-context");
const pointsScoreEl = document.getElementById("points-score");
const roundTimerEl = document.getElementById("round-timer");
const highScoreEl = document.getElementById("high-score");
const newGameButtonEl = document.getElementById("new-game-button");
const bonusToastEl = document.getElementById("bonus-toast");
const celebrationEl = document.getElementById("celebration");
const celebrationKickerEl = document.getElementById("celebration-kicker");
const celebrationTitleEl = document.getElementById("celebration-title");
const celebrationCopyEl = document.getElementById("celebration-copy");
const celebrationButtonEl = document.getElementById("celebration-button");

function normalizeData(value) {
  if (typeof value === "string") {
    return repairText(value);
  }

  if (Array.isArray(value)) {
    return value.map((entry) => normalizeData(entry));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [repairText(key), normalizeData(entry)])
    );
  }

  return value;
}

function repairText(text) {
  return [
    ["Ã¡", "\u00E1"],
    ["Ã¢", "\u00E2"],
    ["Ã£", "\u00E3"],
    ["Ã¤", "\u00E4"],
    ["Ã¥", "\u00E5"],
    ["Ã§", "\u00E7"],
    ["Ã¨", "\u00E8"],
    ["Ã©", "\u00E9"],
    ["Ãª", "\u00EA"],
    ["Ã«", "\u00EB"],
    ["Ã­", "\u00ED"],
    ["Ã®", "\u00EE"],
    ["Ã³", "\u00F3"],
    ["Ã´", "\u00F4"],
    ["Ã¶", "\u00F6"],
    ["Ãº", "\u00FA"],
    ["Ã¼", "\u00FC"],
    ["Ã±", "\u00F1"],
    ["Ä\u0081", "\u0101"],
    ["Äƒ", "\u0103"],
    ["Ä“", "\u0113"],
    ["Å‚", "\u0142"],
    ["Å„", "\u0144"],
    ["Åˆ", "\u0148"],
    ["Åº", "\u017A"],
    ["Å»", "\u017B"],
    ["È™", "\u0219"],
    ["È›", "\u021B"]
  ].reduce((fixed, [broken, corrected]) => fixed.split(broken).join(corrected), text);
}

const state = {
  deck: [],
  currentRound: null,
  points: 0,
  highScore: 0,
  startingHighScore: 0,
  correct: 0,
  presented: 0,
  strikes: 0,
  correctStreak: 0,
  timerId: null,
  timerSegmentStartedAt: 0,
  streakElapsedMs: 0,
  resetTimerOnNextRound: false,
  isLocked: false,
  isComplete: false,
  feedbackTimer: null,
  feedbackReadyAt: 0,
  bonusTimer: null
};

registerServiceWorker();
renderPoints();
resetGame();
newGameButtonEl.addEventListener("click", resetGame);
celebrationButtonEl.addEventListener("click", () => {
  if (Date.now() < state.feedbackReadyAt) {
    return;
  }

  hideCelebration();
  if (!state.isComplete) {
    startRound();
  }
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    fitOptionText();
    fitPromptText();
    fitScoreText();
  });
});

function resetGame() {
  stopRoundTimer();
  state.deck = shuffleList(rounds);
  state.currentRound = null;
  state.points = 0;
  state.correct = 0;
  state.presented = 0;
  state.strikes = 0;
  state.correctStreak = 0;
  state.streakElapsedMs = 0;
  state.timerSegmentStartedAt = 0;
  state.resetTimerOnNextRound = false;
  state.isLocked = false;
  state.isComplete = false;
  state.highScore = readHighScore();
  state.startingHighScore = state.highScore;
  renderScore();
  renderPoints();
  renderStrikes();
  renderTimer(0);
  scoreContextEl.textContent = `of ${rounds.length} countries / territories`;
  fitScoreText();
  startRound();
}

function startRound() {
  if (state.deck.length === 0) {
    finishGame();
    return;
  }

  state.currentRound = state.deck.pop();
  state.isLocked = false;
  promptCountryEl.textContent = state.currentRound.country;
  renderPromptFlag(state.currentRound.country);
  renderOptions(buildOptions(state.currentRound));
  fitPromptText();
  startRoundTimer();
}

function buildOptions(round) {
  const options = new Set([round.capital]);
  const domesticPool = shuffleList((domesticCityMap[round.country] || []).filter((city) => city !== round.capital));
  const nearbyPool = shuffleList((nearbyCapitalMap[round.country] || []).filter((city) => city !== round.capital));
  const fallbackPool = shuffleList(capitalPool.filter((city) => city !== round.capital));

  addOptionsFromPool(options, domesticPool, randomInt(2, 4));
  addOptionsFromPool(options, nearbyPool, randomInt(6, 10));
  addOptionsFromPool(options, fallbackPool, 20 - options.size);

  return sortAlphabetically([...options].slice(0, 20));
}

function renderOptions(options) {
  optionsGridEl.innerHTML = "";
  options.forEach((city) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = city;
    bindPress(button, () => chooseCity(city, button));
    optionsGridEl.appendChild(button);
  });

  window.requestAnimationFrame(fitOptionText);
}

function chooseCity(city, button) {
  if (state.isLocked) {
    return;
  }

  state.isLocked = true;
  const roundMs = stopRoundTimer();
  const isCorrect = city === state.currentRound.capital;
  state.presented += 1;
  if (isCorrect) {
    state.correct += 1;
  }

  applyScoring(isCorrect, 10, roundMs);

  [...optionsGridEl.querySelectorAll(".option-button")].forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.textContent === state.currentRound.capital) {
      optionButton.classList.add("correct");
    }
  });

  if (!isCorrect) {
    button.classList.add("incorrect");
    state.strikes += 1;
    renderStrikes();
  }

  renderScore();
  if (!isCorrect && state.strikes >= 5) {
    finishGame("strikes");
    return;
  }
  showRoundResult(isCorrect);
}

function showRoundResult(isCorrect) {
  celebrationEl.classList.toggle("wrong", !isCorrect);
  celebrationKickerEl.textContent = isCorrect ? "Correct" : "Answer";
  celebrationTitleEl.textContent = state.currentRound.capital;
  celebrationCopyEl.textContent = "";
  showFeedback();
}

function finishGame(reason = "complete") {
  state.isLocked = true;
  state.isComplete = true;
  stopRoundTimer();
  promptCountryEl.textContent = reason === "strikes" ? "Game Over" : "Finished";
  renderPromptFlag(reason === "strikes" ? "GAME_OVER" : "");
  optionsGridEl.innerHTML = "";
  if (reason === "strikes" && state.points > state.startingHighScore) {
    celebrationEl.classList.remove("wrong");
    celebrationKickerEl.textContent = "New Best";
    celebrationTitleEl.textContent = `${state.points} points`;
    celebrationCopyEl.textContent = "New high score before strike five.";
    showFeedback();
    return;
  }

  if (reason === "complete") {
    celebrationEl.classList.remove("wrong");
    celebrationKickerEl.textContent = "Complete";
    celebrationTitleEl.textContent = "Full Set Done";
    celebrationCopyEl.textContent = "";
    showFeedback();
  }
}

function showFeedback() {
  window.clearTimeout(state.feedbackTimer);
  state.feedbackReadyAt = Date.now() + 400;
  celebrationButtonEl.disabled = true;
  celebrationEl.classList.add("show");
  celebrationEl.setAttribute("aria-hidden", "false");
  state.feedbackTimer = window.setTimeout(() => {
    celebrationButtonEl.disabled = false;
  }, 400);
}

function hideCelebration() {
  window.clearTimeout(state.feedbackTimer);
  celebrationButtonEl.disabled = false;
  celebrationEl.classList.remove("show");
  celebrationEl.setAttribute("aria-hidden", "true");
}

function renderScore() {
  scoreEl.textContent = `${state.correct} / ${state.presented}`;
}

function renderStrikes() {
  strikeEls.forEach((strikeEl, index) => {
    strikeEl.classList.toggle("used", index < state.strikes);
  });
}

function startRoundTimer() {
  stopRoundTimer();
  if (state.resetTimerOnNextRound) {
    state.streakElapsedMs = 0;
    state.resetTimerOnNextRound = false;
  }

  state.timerSegmentStartedAt = performance.now();
  renderTimer(state.streakElapsedMs);
  state.timerId = window.setInterval(() => {
    renderTimer(state.streakElapsedMs + performance.now() - state.timerSegmentStartedAt);
  }, 100);
}

function stopRoundTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }

  if (!state.timerSegmentStartedAt) {
    return state.streakElapsedMs || 0;
  }

  state.streakElapsedMs += performance.now() - state.timerSegmentStartedAt;
  state.timerSegmentStartedAt = 0;
  renderTimer(state.streakElapsedMs);
  return state.streakElapsedMs;
}

function renderTimer(milliseconds) {
  const secondsText = (milliseconds / 1000).toFixed(1).padStart(5, "0");
  roundTimerEl.textContent = `${secondsText}s`;
}

function applyScoring(isCorrect, basePoints, roundMs) {
  const bonusMessages = [];

  if (isCorrect) {
    state.points += basePoints;
    state.correctStreak += 1;

    if (state.correctStreak % 10 === 0) {
      state.points += 100;
      bonusMessages.push("+100 streak bonus");

      const streakSeconds = roundMs / 1000;
      if (streakSeconds <= 10) {
        state.points += 400;
        bonusMessages.push("+400 10-in-10 bonus");
      } else if (streakSeconds <= 20) {
        state.points += 200;
        bonusMessages.push("+200 10-in-20 bonus");
      }
    }
  } else {
    state.correctStreak = 0;
    state.resetTimerOnNextRound = true;
  }

  updateHighScore();
  renderPoints();

  if (bonusMessages.length > 0) {
    showBonusToast(bonusMessages.join(" / "));
  }
}

function renderPoints() {
  pointsScoreEl.textContent = state.points;
  highScoreEl.textContent = state.highScore;
}

function updateHighScore() {
  if (state.points <= state.highScore) {
    return;
  }

  state.highScore = state.points;
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(state.highScore));
  } catch {
    // Ignore localStorage issues.
  }
}

function readHighScore() {
  try {
    const storedScore = Number(localStorage.getItem(HIGH_SCORE_KEY));
    return Number.isFinite(storedScore) && storedScore > 0 ? storedScore : 0;
  } catch {
    return 0;
  }
}

function showBonusToast(message) {
  window.clearTimeout(state.bonusTimer);
  bonusToastEl.textContent = message;
  bonusToastEl.classList.add("show");
  bonusToastEl.setAttribute("aria-hidden", "false");
  state.bonusTimer = window.setTimeout(() => {
    bonusToastEl.classList.remove("show");
    bonusToastEl.setAttribute("aria-hidden", "true");
  }, 1400);
}

function fitOptionText() {
  [...optionsGridEl.querySelectorAll(".option-button")].forEach((button) => {
    fitTextToBox(button, { minSize: 10, step: 0.5 });
  });
}

function fitPromptText() {
  fitTextToBox(promptCountryEl, { minSize: 12, step: 1 });
}

function fitScoreText() {
  fitTextToBox(scoreContextEl, { minSize: 9, step: 0.5 });
}

function fitTextToBox(element, options = {}) {
  const minSize = options.minSize || 10;
  const step = options.step || 1;
  element.style.fontSize = "";
  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

  while (fontSize > minSize && doesTextOverflow(element)) {
    fontSize -= step;
    element.style.fontSize = `${fontSize}px`;
  }
}

function doesTextOverflow(element) {
  return element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1;
}

function shuffleList(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function addOptionsFromPool(options, pool, limit) {
  for (const item of pool) {
    if (options.size >= 20 || limit <= 0) {
      break;
    }
    if (options.has(item)) {
      continue;
    }
    options.add(item);
    limit -= 1;
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortAlphabetically(items) {
  return items.slice().sort((left, right) => left.localeCompare(right, undefined, { sensitivity: "base" }));
}

function renderPromptFlag(country) {
  if (country === "GAME_OVER") {
    promptFlagEl.style.backgroundImage = `url("${getGameOverIconUrl()}")`;
    promptFlagEl.textContent = "";
    promptFlagEl.setAttribute("role", "img");
    promptFlagEl.setAttribute("aria-label", "Crying face");
    return;
  }

  const countryCode = countryCodeMap[country];
  if (!countryCode) {
    promptFlagEl.style.backgroundImage = "";
    promptFlagEl.textContent = "";
    promptFlagEl.removeAttribute("role");
    promptFlagEl.removeAttribute("aria-label");
    return;
  }

  promptFlagEl.textContent = "";
  promptFlagEl.style.backgroundImage = `url("${getFlagUrl(countryCode)}")`;
  promptFlagEl.setAttribute("role", "img");
  promptFlagEl.setAttribute("aria-label", `${country} flag`);
}

function getFlagUrl(code) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

function getGameOverIconUrl() {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23ffd76a'/%3E%3Ccircle cx='22' cy='26' r='4' fill='%23132533'/%3E%3Ccircle cx='42' cy='26' r='4' fill='%23132533'/%3E%3Cpath d='M22 46c3-5 17-5 20 0' fill='none' stroke='%23132533' stroke-linecap='round' stroke-width='4'/%3E%3Cpath d='M18 20c3-3 7-4 11-3' fill='none' stroke='%23132533' stroke-linecap='round' stroke-width='3'/%3E%3Cpath d='M35 17c4-1 8 0 11 3' fill='none' stroke='%23132533' stroke-linecap='round' stroke-width='3'/%3E%3Cpath d='M16 34c1 6 1 11-2 16' fill='none' stroke='%235aa7ff' stroke-linecap='round' stroke-width='4'/%3E%3Cpath d='M48 34c-1 6-1 11 2 16' fill='none' stroke='%235aa7ff' stroke-linecap='round' stroke-width='4'/%3E%3C/svg%3E";
}

function bindPress(button, onChoose) {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.classList.add("pressing");
    onChoose();
  });
  button.addEventListener("pointerup", () => {
    button.classList.remove("pressing");
  });
  button.addEventListener("pointercancel", () => {
    button.classList.remove("pressing");
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .then(() => caches.keys())
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith("capitals-game-pwa-")).map((key) => caches.delete(key))
      ))
      .then(() => {
        if (sessionStorage.getItem("capitalsCacheCleared") === APP_VERSION) {
          return;
        }

        sessionStorage.setItem("capitalsCacheCleared", APP_VERSION);
        window.location.replace(`./index.html?app-version=${APP_VERSION}`);
      })
      .catch(() => {});
  });
}
