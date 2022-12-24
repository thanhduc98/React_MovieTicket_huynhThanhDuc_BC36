import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { huyGhe } from "../store/actions/MovieTicketAction";

export default function ThongTinVeXem() {
  const dispatch = useDispatch();
  const arrGheDangDat = useSelector(
    (state) => state.MovieTicketReducer.danhSachGheDangDat
  );
  const renderThongTin = () => {
    return arrGheDangDat.map((ghe, index) => {
      return (
        <tr key={index} className='text-white fs-3 text' >
            <td>{ghe.soGhe}</td>
            <td>{ghe.gia.toLocaleString()}</td>
            <td>
                <button className='btn btn-primary'onClick={()=>{
                    dispatch(huyGhe(ghe.soGhe))
                }}>Hủy</button>
            </td>
            </tr>
      );
    });
  };
  return (
    <div>
      <div className="mt-4">
        <button className="gheDuocChon"></button>
        <span style={{ fontSize: "25px" }} className="text-light">
          {" "}
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span style={{ fontSize: "25px" }} className="text-light">
          {" "}
          Ghế đang đặt
        </span>
        <br />
        <button className="ghe mx-0"></button>
        <span style={{ fontSize: "25px" }} className="text-light">
          {" "}
          Ghế chưa đặt
        </span>
      </div>
      <div className="mt-5">
        <table className="table" border="2">
          <thead>
            <tr className="text-light" style={{ fontSize: "30px" }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderThongTin()}</tbody>
          <tfoot>
            <td></td>
            <td className="fs-3 text" style={{ color: "white" }}>Tổng tiền</td>
            <td className="fs-3 text" style={{ color: "white" }}>
              {arrGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.gia);
                }, 0)
                .toLocaleString()}
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
