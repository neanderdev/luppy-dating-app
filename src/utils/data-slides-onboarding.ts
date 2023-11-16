import { ImageSourcePropType } from "react-native";

export interface IOnboarding {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export const dataSlides = [
  {
    id: 1,
    title: "Welcome to Luppy!",
    description:
      "With our easy-to-use app, you can browse profiles, send messages, and arrange meetups with other dog owners in your area.",
    image: require("../assets/dogs-group.png"),
  },
  {
    id: 2,
    title: "Create your dog's profile.",
    description:
      "Include information about your dog's breed, size, temperament, energy level, and play style.",
    image: require("../assets/dog-welcome.png"),
  },
  {
    id: 3,
    title: "Start swiping!",
    description:
      "Once you've created your dog's profile, you can start swiping through potential matches.",
    image: require("../assets/dog-couple.png"),
  },
] as IOnboarding[];
