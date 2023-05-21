const { usersModel } = require('../models')
const { handleError } = require('../utils/handleError')
const { getUserAuth } = require('../utils/getUserAuth')

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

const refreshGifs = async (req, res) => {
  try {
    const body = req.body
    const { gifs } = body
    const user = await getUserAuth(req, res)
    const data = await usersModel.updateOne({ _id: user._id }, { gifs })
    console.log(data)
    res.send({ data })
  } catch (err) {
    handleError(res, err, 400)
  }
}

const addGifs = () => {}

module.exports = { getGifs, addGifs, refreshGifs }
