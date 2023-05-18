/**
 * get favorites gifs of 1 user
 * @param {*} req
 * @param {*} res
 */

const getGifs = async (req, res) => {
  try {
    const data = {
      id: 'IgpAALi5hEv1IFmCrZ',
      title: 'Season 1 Drinking GIF by Rick and Morty',
      url: 'https://giphy.com/gifs/rickandmorty-season-1-adult-swim-rick-and-morty-IgpAALi5hEv1IFmCrZ',
    }
    res.send({ data })
  } catch (err) {
    res.send()
  }
}

const addGifs = () => {}

module.exports = { getGifs, addGifs }
