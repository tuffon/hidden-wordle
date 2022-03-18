import { createModel } from '@rematch/core'
import type { RootModel } from './models'
import axios from 'axios'

type SolutionState = {
	solution: string
	quote: string
  quoteIndex: String
}

type PayloadType = {
  current_word: string
  current_quote: string
}

export const solution = createModel<RootModel>()({
	state: {
		solution: '',
		quote: '',
    quoteIndex: '',
	} as SolutionState,
	reducers: {
		initialize(state, payload: PayloadType) {
      state.quote = payload.current_quote
      state.solution = payload.current_word
      console.log(state)
			return {
				solution: payload.current_word,
				quote: payload.current_quote,
        quoteIndex: '',
			}
		},
	},
	effects: (dispatch) => ({
		async getDailyWord() {
      let { data } = await axios.get('/api/getdailyword')
      console.log(data)
			dispatch.solution.initialize(data)
		},
	}),
})