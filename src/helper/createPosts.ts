import { faker } from "@faker-js/faker";
import type { TPost } from "../components/post";

faker.seed(123);

const createPosts = (count: number) => {
  const posts = [];
  for (let i = 1; i <= count; i++) {
    posts.push({
      id: "" + i,
      avatarUrl: faker.image.avatar(),
      userName: faker.person.fullName(),
      userHandle: `@${faker.word.adjective()}${faker.word.noun()}`,
      timestamp: new Date().toISOString(),
      textContent: faker.lorem.sentence(),
      imageSrc: faker.image.url({ width: 600, height: 400 }),
      likeCount: faker.number.int({ min: 0, max: 1000 }),
      shareLink: faker.internet.url(),
    });
  }
  return posts as TPost[];
};

export default createPosts;
