import React from 'react';
import ThongTinVeXem from './ThongTinVeXem'
import '../assets/MovieTicket.css'
import '../img/bgmovie.jpg'
import HangGhe from './HangGhe';
import {useSelector} from 'react-redux'

export default function MovieTicket(props) {
    const arrGhe=useSelector(state=>state.MovieTicketReducer.danhSachGhe)
    const renderHang=()=>{
        return arrGhe.map((hang,index)=>{
            return <div key={index} style={{marginLeft:45}}>
                <HangGhe hangGhe={hang} soHangGhe={index}/>
            </div>
        })
    }
    console.log(arrGhe)
    
    return (
        <div className='bookingMovie' style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundImage: "url('./img/bgmovie.jpg')",
            backgroundSize: 'cover',
            backgroundPosition:'center'
        }}>
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                position: 'fixed',
                width: '100%',
                height: '100%'
            }}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-8 text-center '>
                            <div className='text-warning display-4'>ĐẶT VÉ XEM CYBERLEARN.VN</div>
                            <div className='text-light'>Màn hình</div>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <div className='screen'></div>
                            </div>
                            {renderHang()}
                        </div>
                        <div className='col-4'>
                        <div style={{fontSize:'30px'}} className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</div>
                        <ThongTinVeXem/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
