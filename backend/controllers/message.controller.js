import Conversation from '../models/conversation.models.js';
import Message from '../models/message.models.js'
import User from '../models/user.models.js'
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id;
        const { username: username } = req.params;
        const { message } = req.body;

        const receiver = await User.findOne({ username });
        const receiverId = receiver._id;

        const today = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
        const time = `${today.getHours()}:${today.getMinutes()}`;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
            date,
            time
        });

        if (newMessage) {
            conversation.messages.unshift(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);

        console.log(receiverSocketId, newMessage);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getMessages = async (req, res) => {
    try {
        const senderId = req.user._id;
        const { username: username } = req.params;
        
        const receiver = await User.findOne({ username });
        const receiverId = receiver._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        // console.log(messages);

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getConversations = async (req, res) => {
    try {
        const senderId = req.user._id;

        const conversation = await Conversation.find({
            participants: { $all: [senderId] }
        }).select("participants").populate("participants");

        if (!conversation) return res.status(200).json([]);

        console.log(conversation);

        res.status(200).json(conversation);

    } catch (error) {
        console.log("Error in getConversations controller", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}