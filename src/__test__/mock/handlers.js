import { rest } from 'msw';

const handlers = [
  rest.get('https://api.jikan.moe/v4/anime', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    const type = req.url.searchParams.get('type');

    return (
      res(
        ctx.json({
          data: [
            {
              mal_id: +page,
              url: 'string',
              images: {
                jpg: {
                  image_url: 'string',
                  small_image_url: 'string',
                  large_image_url: 'string',
                },
                webp: {
                  image_url: 'string',
                  small_image_url: 'string',
                  large_image_url: 'string',
                },
              },
              trailer: {
                youtube_id: 'string',
                url: 'string',
                embed_url: 'string',
              },
              title: `Test Anime Title: ${page}`,
              title_english: `Test Anime Title: ${page}`,
              title_japanese: 'string',
              title_synonyms: [
                'string',
              ],
              type,
              source: 'string',
              episodes: 0,
              status: 'Finished Airing',
              airing: true,
              aired: {
                from: 'string',
                to: 'string',
                prop: {
                  from: {
                    day: 0,
                    month: 0,
                    year: 0,
                  },
                  to: {
                    day: 0,
                    month: 0,
                    year: 0,
                  },
                  string: 'string',
                },
              },
              duration: 'string',
              rating: 'G - All Ages',
              score: 9.8,
              scored_by: 0,
              rank: 0,
              popularity: 0,
              members: 0,
              favorites: 0,
              synopsis: 'My Story',
              background: 'string',
              season: 'Summer',
              year: 0,
              broadcast: {
                day: 'string',
                time: 'string',
                timezone: 'string',
                string: 'string',
              },
              producers: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              licensors: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              studios: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              genres: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              explicit_genres: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              themes: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              demographics: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
            },
          ],
          pagination: {
            last_visible_page: 0,
            has_next_page: true,
          },
        }),
        ctx.status(200),
      )
    );
  }),
  rest.get('https://api.jikan.moe/v4/anime/*', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');

    return (
      res(
        ctx.json({
          data:
            {
              mal_id: +id,
              url: 'string',
              images: {
                jpg: {
                  image_url: 'string',
                  small_image_url: 'string',
                  large_image_url: 'string',
                },
                webp: {
                  image_url: 'string',
                  small_image_url: 'string',
                  large_image_url: 'string',
                },
              },
              trailer: {
                youtube_id: 'string',
                url: 'string',
                embed_url: 'string',
              },
              title: `Test Anime Title: ${id}`,
              title_english: `Test Anime Title: ${id}`,
              title_japanese: 'string',
              title_synonyms: [
                'string',
              ],
              type: 'TV',
              source: 'string',
              episodes: 0,
              status: 'Finished Airing',
              airing: true,
              aired: {
                from: 'string',
                to: 'string',
                prop: {
                  from: {
                    day: 0,
                    month: 0,
                    year: 0,
                  },
                  to: {
                    day: 0,
                    month: 0,
                    year: 0,
                  },
                  string: 'string',
                },
              },
              duration: 'string',
              rating: 'G - All Ages',
              score: 9.8,
              scored_by: 0,
              rank: 0,
              popularity: 0,
              members: 0,
              favorites: 0,
              synopsis: 'My Story is amazing',
              background: 'string',
              season: 'Summer',
              year: 0,
              broadcast: {
                day: 'string',
                time: 'string',
                timezone: 'string',
                string: 'string',
              },
              producers: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              licensors: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              studios: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              genres: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              explicit_genres: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              themes: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
              demographics: [
                {
                  mal_id: 0,
                  type: 'string',
                  name: 'string',
                  url: 'string',
                },
              ],
            },
        }),
        ctx.status(200),
      )
    );
  }),
];

export default handlers;
