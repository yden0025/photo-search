import { rootReducer } from "./Redux/reducers"

test('should return the initial state', () => {
  expect(rootReducer(undefined, {})).toEqual(
    {
      data: {
        page: Number(localStorage.getItem('page')) || 1,
        per_page: 10,
        photos: [],
        total_results: 0,
        next_page: '',
        prev_page: ''
      },
      query: localStorage.getItem('query') || '',
      loading: false
    }
  )
})

