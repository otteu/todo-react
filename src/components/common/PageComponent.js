import React from "react";

function PageComponent({serverData, movePage}) {


    return (
        <div className='m-6 flex justify-center'>
            
            {/* 이전 데이터가 있다면 이전페이지로 이동할 수 있게끔 만드는 기능*/}
            {serverData.prev ?
                <div 
                    className='m-2 p-2 w-16 text-center font-bold text-blue-400'
                    onClick={ () => movePage({page:serverData.prev_page} )}
                >
                    Prev 
                </div> : <></>
            }
        
            {/* 페이징 번호 순서대로 출력 */}
            {serverData.page_num_list.map(pageNum =>
                <div 
                    key={pageNum}
                    className={ `m-2 p-2 w-12 text-center rounded shadow-md text-white
                    ${serverData.current === pageNum? 'bg-grev-500':'bg-blue-400'}`}
                    onClick={ () => {
                        console.log(pageNum)
                        movePage( {page:pageNum}) 
                        }}>
                    {pageNum}
                </div>
            )}

            {/* 마지막 next */}
            {serverData.next ?
                <div 
                    className='m-2 p-2 w-16 text-center font-bold text-blue-400'
                    onClick={ () => movePage( {page:serverData.next_page} )}>
                    Next
                </div> : <></>
            }
        </div> 
    );
}

export default PageComponent;