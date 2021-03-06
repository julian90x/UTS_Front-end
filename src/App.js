import Nav from "./component/Nav";
import Card from "./component/Card";
import ReactState from "./component/ReactState";
import Form from "./component/Form"


const isiCard = [
  { gambar:"/gambar 1.jpg",
    title : "Mobil Avanza",
    content : "Rp 250.000/Day"
  },

  { gambar:"/gambar 2.jpg",
  title : "Mobil Xenia",
  content : "Rp 250.000/Day"
  },

  { gambar:"/gambar 3.jpg",
  title : "Mobil Hiace",
  content : "Rp 1.200.000/Day "
  },

  { gambar:"/gambar 4.jpg",
  title : "Mobil Elf Long",
  content : "Rp 850.000/Day"
  },

  { gambar:"/gambar 5.jpg",
  title : "Mobil Brv",
  content : "Rp 300.000/Day"
  },

  { gambar:"/gambar 6.jpg",
  title : "Mobil Alphard",
  content : "Rp 2.500.000/Day"
  },

  { gambar:"/gambar 7.jpg",
  title : "Bus Medium",
  content : "3.000.000/Day "
  },

  { gambar:"/gambar 8.jpg",
  title : "Big Bus",
  content : "4.500.000/Day"
  },

];

function App() {
  return (
    <container>
      <Nav />
      <div className="container">
        <Form/>
      </div>

      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
          </div>
        ))}
      </div>
      <hr />
      <h2>State</h2>
      <ReactState />
    </container>
  );
}

export default App;
