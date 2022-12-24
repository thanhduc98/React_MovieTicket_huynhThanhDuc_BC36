import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { datGheAction } from '../store/actions/MovieTicketAction';

export default function HangGhe(props) {
    const dispatch=useDispatch();
    const arrGheDangDat=useSelector(state=>state.MovieTicketReducer.danhSachGheDangDat)
    console.log(arrGheDangDat)

    const renderGhe=()=>{
        return props.hangGhe.danhSachGhe.map((ghe, index)=>{
            let cssGheDaDat='';
            let disable=false;
            //ghế đã được người khác đặt ròi
            if(ghe.daDat){
                cssGheDaDat='gheDuocChon'
                disable=true;
            }
            //ghế đang đặt
            let cssGheDangDat=''
            let indexGheDangDat=arrGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
            if(indexGheDangDat!==-1){
                cssGheDaDat='gheDangChon'
            }
            return <button onClick={()=>{
                datGhe(ghe)
            }} disabled={disable}  className={`ghe ${cssGheDaDat} ${cssGheDangDat} `}key={index}>
                {ghe.soGhe}
                {/* {index+1} */}
            </button>
        })
    
    }
    
    const renderSoHang=()=>{

        return props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button key={index} className='rowNumber' >{hang.soGhe}</button>
        }) 
        
    }

    const renderHangGhe=()=>{
        if(props.soHangGhe===0){
            return  <div style={{marginLeft:15}}>
                {props.hangGhe.hang}{renderSoHang()}
            </div>
        }
        else {
            return <div>
                {props.hangGhe.hang}{renderGhe()}
            </div>
        }
    }
    const datGhe=(ghe)=>{
        dispatch(datGheAction(ghe));
    }
  return (
<div className='text-light' style={{textAlign:'left', fontSize:25}}>
        {/* {props.hangGhe.hang} */}
        {renderHangGhe()}
    </div>
  )
}
