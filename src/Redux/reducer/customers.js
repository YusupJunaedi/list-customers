// import actionType from "../actions/actionType";

let initialState = {
  data: [
    {
      email: "yusup.junaedi97@gmail.com",
      nama: "Yusup Juaedi",
      no_tlpn: "085820500512",
      alamat: 'jl.padjajaran no 48, kota sukabumi'
    },
    {
      email: "rini87@gmail.com",
      nama: "Rini Nuraeni",
      no_tlpn: "085887554678",
      alamat: 'jl.lokantara no 02, kota sukabumi'
    },
    {
      email: "faiz@gmail.com",
      nama: "Faiz Setiawan",
      no_tlpn: "085899888876",
      alamat: 'Jl.internasiol2 no 7, Kabupaten Bekasi'
    },
    {
      email: "gana@gmail.com",
      nama: "Gana gunawan",
      no_tlpn: "085820099887",
      alamat: 'jl.nasiol no 78, kota malang'
    }
  ],
};

const customersReducer = (prevState = initialState, { type, payload }) => {
  return prevState
};

export default customersReducer;
