import "./list.scss";
import Card from "../card/Card";
import apiRequest from "../../lib/apiRequest";

function List({ posts, setExternalChat }) {
  const handleOpenChatExternally = async (receiver) => {
    try {
      const res = await apiRequest.post("/chats", { receiverId: receiver.id });
      setExternalChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="list">
      {posts.map((item) => (
        <Card
          key={item.id}
          item={item}
          onChatClick={handleOpenChatExternally}
        />
      ))}
    </div>
  );
}

export default List;
