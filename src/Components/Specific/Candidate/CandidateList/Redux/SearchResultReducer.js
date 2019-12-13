import {SET_SEARCH_RESULT} from './Constants';

const initialState = { 
    "paths":[ 
       "MeghnaLohani.pdf",
       "AmanSharma.pdf",
       "Chandler.pdf",
       "RESUME SCORING USING NLP.pdf"
    ],
    "score":[ 
       [ 
          "Campus Address ",
          0.17745439734093024
       ],
       [ 
          "Aman Sharma ",
          0.13982319420709519
       ],
       [ 
          "Chandler Bing ",
          0.13268429255148464
       ],
       [ 
          "RESUME SCORING USING NLP ",
          0.1110148599872917
       ]
    ]
 };

const searchResult = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return action.searchResult
        default:
            return state;
    }
}

export default searchResult;