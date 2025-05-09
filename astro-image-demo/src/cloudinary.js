import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
	cloud_name: "dillionmegida",
	secure: true,
});

export const cld = cloudinary