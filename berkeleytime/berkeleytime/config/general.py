"""General Settings for Berkeleytime."""
from semesters import spring2013
from semesters import fall2013
from semesters import spring2014
from semesters import fall2014
from semesters import spring2015
from semesters import fall2015
from semesters import spring2016
from semesters import fall2016
from semesters import spring2017
from semesters import fall2017
from semesters import spring2018
from semesters import spring2019

GRADE_POINT = {
    'a1': 4.0, 'a2': 4.0, 'a3': 3.7,
    'b1': 3.3, 'b2': 3.0, 'b3': 2.7,
    'c1': 2.3, 'c2': 2.0, 'c3': 1.7,
    'd1': 1.3, 'd2': 1.0, 'd3': 0.7,
    'f': 0.0
}

LETTER_GRADE = {
    4.0: 'A', 3.7: 'A-',
    3.3: 'B+', 3.0: 'B', 2.7: 'B-',
    2.3: 'C+', 2.0: 'C', 1.7: 'C-',
    1.3: 'D+', 1.0: 'D', 0.7: 'D-',
    0.0: 'F', -1.0: '',
}

PAST_SEMESTERS = [
    {'semester': 'spring', 'year': '2013', 'display': 'Spring 2013'},
    {'semester': 'fall', 'year': '2013', 'display': 'Fall 2013'},
    {'semester': 'spring', 'year': '2014', 'display': 'Spring 2014'},
    {'semester': 'fall', 'year': '2014', 'display': 'Fall 2014'},
    {'semester': 'spring', 'year': '2015', 'display': 'Spring 2015'},
    {'semester': 'fall', 'year': '2015', 'display': 'Fall 2015'},
    {'semester': 'spring', 'year': '2016', 'display': 'Spring 2016'},
    {'semester': 'fall', 'year': '2016', 'display': 'Fall 2016'},
    {'semester': 'spring', 'year': '2017', 'display': 'Spring 2017'},
    {'semester': 'fall', 'year': '2017', 'display': 'Fall 2017'},
    {'semester': 'spring', 'year': '2018', 'display': 'Spring 2018'},
    {'semester': 'fall', 'year': '2019', 'display': 'Fall 2018'}
]


# Any semester thats not the next semester, even if its current

PAST_SEMESTERS_TELEBEARS_JSON = {
    'spring 2013': spring2013.TELEBEARS_JSON,
    'fall 2013': fall2013.TELEBEARS_JSON,
    'spring 2014': spring2014.TELEBEARS_JSON,
    'fall 2014': fall2014.TELEBEARS_JSON,
    'spring 2015': spring2015.TELEBEARS_JSON,
    'fall 2015': fall2015.TELEBEARS_JSON,
    'spring 2016': spring2016.TELEBEARS_JSON,
    'fall 2016': fall2016.TELEBEARS_JSON,
    'spring 2017': spring2017.TELEBEARS_JSON,
    'fall 2017': fall2017.TELEBEARS_JSON,
    'spring 2018': spring2018.TELEBEARS_JSON,
    'fall 2018': fall2018.TELEBEARS_JSON,
}

PAST_SEMESTERS_TELEBEARS = {
    'spring 2013': spring2013.TELEBEARS,
    'fall 2013': fall2013.TELEBEARS,
    'spring 2014': spring2014.TELEBEARS,
    'fall 2014': fall2014.TELEBEARS,
    'spring 2015': spring2015.TELEBEARS,
    'fall 2015': fall2015.TELEBEARS,
    'spring 2016': spring2016.TELEBEARS,
    'fall 2016': fall2016.TELEBEARS,
    'spring 2017': spring2017.TELEBEARS,
    'fall 2017': fall2017.TELEBEARS,
    'spring 2018': spring2018.TELEBEARS,
    'fall 2018': fall2018.TELEBEARS,
}

# Classes with special characters
SPECIAL_CHARACTER_ABBREVIATIONS = {
    "ENVDES": "ENV DES",
    "VISSTD": "VIS STD",
    "BIOENG": "BIO ENG",
    "CHMENG": "CHM ENG",
    "CYPLAN": "CY PLAN",
    "CIVENG": "CIV ENG",
    "COMLIT": "COM LIT",
    "EALANG": "EA LANG",
    "ELENG": "EL ENG",
    "ENERES": "ENE, RES",
    "ETHSTD": "ETH STD",
    "DEVSTD": "DEV STD",
    "MESTU": "M E STU",
    "INDENG": "IND ENG",
    "LS": "L & S",
    "LDARCH": "LD ARCH",
    "MATSCI": "MAT SCI",
    "MECENG": "MEC ENG",
    "MILAFF": "MIL AFF",
    "MILSCI": "MIL SCI",
    "NAVSCI": "NAV SCI",
    "NESTD": "NE STD",
    "NUCENG": "NUC ENG",
    "PHYSED": "PHYS ED",
    "POLSCI": "POL SCI",
    "PBHLTH": "PB HLTH",
    "PUBPOL": "PUB POL",
    "SOCWEL": "SOC WEL",
    "HINURD": "HIN-URD",
    "MALAYI": "MALAY/I",
    "SASIAN": "S ASIAN",
    "SSEASN": "S,SEASN",
    "COGSCI": "COG SCI",
    "VISSCI": "VIS SCI",
}
