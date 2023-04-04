import "./AppContent.css";
import axios from "axios";
const url = "http://127.0.0.1:8080/product/list";
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzgzMTU5MzR9.L_mJBlEvB7DfaII9MYxdjLbas8IaE8Q0ng6YBMNRPuE';

// Store the JWT token in the local storage
localStorage.setItem('jwtToken', jwtToken);
const token = "Bearer " + localStorage.getItem("jwtToken");

const headers = {
  "Content-Type": "application/json",
  Authorization: token,
};

function AppContent() {
  const handleClick = async() => {
   await axios
      .get(url, {headers})
      .then((response) => {
        console.log(response.data);
        // do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // handle the error
      });
  };

  return (
    <body>
      <div className="main-content">
        <img className="app-main-image" src="./image/Raidho.png" />
        <h2 className="app-main-title">Raidho Slowbar</h2>
        <button className="button-product" onClick={handleClick}>
          Get Data
        </button>
      </div>
      <div className="app-main-detail">
        <h1>コーヒーで、人と人をつなぐ。</h1>
        <p>
          手から手へと渡るぬくもり、それは人と人を繋ぐコミュニケーションの一端を担います。点と点を結び、また点から点へと繋がっていきます。「RAIDHO
          SLOWBAR」とはポルトガル語で“公共バス”、「万人の為に」という語源を持つ言葉です。バス停からバス停へと人を繋いでいく日常。そんなバスのように人と人を繋ぐという思いを込めて、オニバスコーヒーと名付けました。日常にとけ込んだ一杯、そんなコーヒーをお届けします。
        </p>
      </div>
    </body>
  );
}

export default AppContent;
