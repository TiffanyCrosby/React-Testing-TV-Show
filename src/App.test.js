// import React from 'react';

// import { render, waitFor } from '@testing-library/react';

// import App from './App';
// import { fetchShow as mockFetchShow } from './api/fetchShow';

// jest.mock('./api/fetchShow');

// test('renders App to screen', () => {
//   render(<App />);
// });

// test('renders episodes to screen when season selected', async () => {
//   const mockData = {
//     image: {
//       original:
//         'http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg',
//     },
//     name: 'Stranger Things',
//     summary:
//       "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
//     _embedded: {
//       episodes: [
//         {
//           id: 553946,
//           url:
//             'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
//           name: 'Chapter One: The Vanishing of Will Byers',
//           season: 1,
//           number: 1,
//           airdate: '2016-07-15',
//           airtime: '',
//           airstamp: '2016-07-15T12:00:00+00:00',
//           runtime: 60,
//           image: {
//             medium: 'medium_image',
//           },
//           summary:
//             "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
//         },
//       ],
//     },
//   };

//   mockFetchShow.mockResolvedValueOnce(mockData);
//   const { queryAllByText, getByText } = render(<App />);
//   expect(queryAllByText(/fetching data.../i)).toHaveLength(1);
//   await waitFor(() => {
//     expect(queryAllByText(/summary/i)).toHaveLength(2);
//   });
// });

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');

test('App fetches show data and renders it', async () => {
  const mockData = {
    image: {
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg',
    },
    name: 'Stranger Things',
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
          name: 'Chapter One: The Vanishing of Will Byers',
          season: 1,
          number: 1,
          airdate: '2016-07-15',
          airtime: '',
          airstamp: '2016-07-15T12:00:00+00:00',
          runtime: 60,
          image: { medium: 'medium_image' },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        },
      ],
    },
  };
  mockFetchShow.mockResolvedValueOnce(mockData);
  const { queryAllByText } = render(<App />);
  expect(queryAllByText(/fetching data.../i)).toHaveLength(1);
  await waitFor(() => {
    expect(queryAllByText(/stranger things/i)).toHaveLength(
      2
    ); /*h1 and bold in summary */
  });
});
