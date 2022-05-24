import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID YBBbn2O8OMJoVLBBTglnnsXpZu4Cu_KNlpPlUk9fVPc",
  },
});
