{\rtf1\ansi\ansicpg932\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 (function() \{\
    'use strict';\
\
    // \uc0\u12524 \u12467 \u12540 \u12489 \u36861 \u21152 \u12539 \u32232 \u38598 \u30011 \u38754 \u12391 \u21205 \u20316 \u12377 \u12427 \u12452 \u12505 \u12531 \u12488 \
    kintone.events.on(['app.record.create.show', 'app.record.edit.show'], function(event) \{\
        const dropdownField = '\uc0\u37117 \u36947 \u24220 \u30476 '; // \u12489 \u12525 \u12483 \u12503 \u12480 \u12454 \u12531 \u12501 \u12451 \u12540 \u12523 \u12489 \u12398 \u12501 \u12451 \u12540 \u12523 \u12489 \u12467 \u12540 \u12489 \
        const prefectures = [\
            '\uc0\u21271 \u28023 \u36947 ', '\u38738 \u26862 \u30476 ', '\u23721 \u25163 \u30476 ', '\u23470 \u22478 \u30476 ', '\u31179 \u30000 \u30476 ', '\u23665 \u24418 \u30476 ', '\u31119 \u23798 \u30476 ',\
            '\uc0\u33576 \u22478 \u30476 ', '\u26627 \u26408 \u30476 ', '\u32676 \u39340 \u30476 ', '\u22524 \u29577 \u30476 ', '\u21315 \u33865 \u30476 ', '\u26481 \u20140 \u37117 ', '\u31070 \u22856 \u24029 \u30476 ',\
            '\uc0\u26032 \u28511 \u30476 ', '\u23500 \u23665 \u30476 ', '\u30707 \u24029 \u30476 ', '\u31119 \u20117 \u30476 ', '\u23665 \u26792 \u30476 ', '\u38263 \u37326 \u30476 ', '\u23696 \u38428 \u30476 ', \
            '\uc0\u38745 \u23713 \u30476 ', '\u24859 \u30693 \u30476 ', '\u19977 \u37325 \u30476 ', '\u28363 \u36032 \u30476 ', '\u20140 \u37117 \u24220 ', '\u22823 \u38442 \u24220 ', '\u20853 \u24235 \u30476 ', \
            '\uc0\u22856 \u33391 \u30476 ', '\u21644 \u27468 \u23665 \u30476 ', '\u40165 \u21462 \u30476 ', '\u23798 \u26681 \u30476 ', '\u23713 \u23665 \u30476 ', '\u24195 \u23798 \u30476 ', '\u23665 \u21475 \u30476 ',\
            '\uc0\u24499 \u23798 \u30476 ', '\u39321 \u24029 \u30476 ', '\u24859 \u23195 \u30476 ', '\u39640 \u30693 \u30476 ', '\u31119 \u23713 \u30476 ', '\u20304 \u36032 \u30476 ', '\u38263 \u23822 \u30476 ', \
            '\uc0\u29066 \u26412 \u30476 ', '\u22823 \u20998 \u30476 ', '\u23470 \u23822 \u30476 ', '\u40575 \u20816 \u23798 \u30476 ', '\u27798 \u32260 \u30476 '\
        ];\
\
        // \uc0\u12501 \u12451 \u12540 \u12523 \u12489 \u12398 \u20516 \u12434 \u26356 \u26032 \
        const field = kintone.app.record.getFieldElement(dropdownField);\
        if (field) \{\
            field.innerHTML = ''; // \uc0\u26082 \u23384 \u12398 \u36984 \u25246 \u32930 \u12434 \u12463 \u12522 \u12450 \
            prefectures.forEach(function(pref) \{\
                const option = document.createElement('option');\
                option.text = pref;\
                option.value = pref;\
                field.appendChild(option);\
            \});\
        \}\
\
        return event;\
    \});\
\})();\
}