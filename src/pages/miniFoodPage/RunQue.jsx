
import Footer from "../../layouts/Footer";
import LogoCat from "../../layouts/LogoCat";

// import QuePage from "../QuePage";

// import BotQueue from "../../components/BotQueue";

export default function RunQue() {
    const [cards, setCards] = useState([]);
  
    const addCard = () => {
      const nextNumber = cards.length + 1;
      setCards([...cards, { id: nextNumber, content: `Card ${nextNumber}` }]);
    };
  
    const deleteCard = (id) => {
      setCards(cards.filter(card => card.id !== id));
    };
  
    const renderCards = () => {
      const cardElements = [];
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        cardElements.push(
          <div key={card.id}>
            <p>{card.content}</p>
            <button onClick={() => deleteCard(card.id)}>ลบ</button>
          </div>
        );
      }
    };
  return (
    
    <div
      className=""
      style={{
        backgroundSize: "2000px 2000px",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
      }}
    >
      <br />
      <div>
        <div className="flex justify-center items-center p-10">
          <a className="p-2 text-[1.5rem] font-bold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เลขบัตรคิว
            R1-CAT01 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            วันศุกร์ที่ 23 กุมภาพันธ์ 2567 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Round - เช้า เวลา 12:00pm 1 คน Price 200 Baht
            <br />กรุณานำเลขบัตรคิวไปยื่นให้ที่พนักงานหน้าร้านได้เลยครับ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank
            you
          </a>
        </div>
      </div>
      <LogoCat />
      <br />
      <br />
      <Footer />
    </div>
  );
};