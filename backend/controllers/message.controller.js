import Message from '../models/message.model.js'
import User from '../models/user.models.js'

export const sendMessage = async (req, res) => {
    const senderId = req.user._id;
    const { id: receiverID } = req.params;
    const { message } = req.body;

    const user = User.findById()
}

export const getMessages = async (req, res) => {

}