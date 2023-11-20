import Image from "../models/image.model.js";
export const uploadImage = async (req, res) => {
  const { userRef, imageUrls } = req.body;
  try {
    const createdImages = await Image.create(
      imageUrls.map((url) => ({ userRef, url }))
    );
    res.status(201).json(createdImages);
  } catch (error) {
    next(error);
  }
};

export const getUserImages = async (req, res) => {
  try {
    const images = await Image.find({ userRef: req.user.id });
    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};
