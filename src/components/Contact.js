import React from 'react';

const Contact = props => {
    return (
        <div className={'h-screen mt-12'}>

            <div className={'w-full h-4/6 p-10'} style={{ backgroundColor: 'rgb(19,181,164)', textAlign: 'center' }}>
                <p class={'text-white mb-7 font-medium'}>
                    Contact information
                </p>
                <p class={'text-white text-white-200 mb-8'} style={{ color: 'rgb(231,250,246)' }}>
                    You can contact us any time. We will reply you to clear all of your doubts and everything which you have.
                </p>
                <p className={'text-white mb-3'} style={{ color: 'rgb(231,250,246)' }}>
                    <img src="https://img.icons8.com/fluency-systems-regular/30/000000/phone.png" className={'inline-block mr-3'} style={{ filter: 'invert(100%)' }} />
                    +92 302 5894071
                </p>
                <div>
                    <img src="https://img.icons8.com/ios/23/000000/message-read.png" className={'inline-block mr-5'} style={{ filter: 'invert(100%)' }} />
                    <p className={'text-white inline-block relative top-1'} style={{ color: 'rgb(231,250,246)' }}>
                        teamsevolution@outlook.com
                    </p>
                </div>
                <div className={'flex justify-center mt-8'}>
                    <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" style={{ filter: 'invert(100%)' }} className={'h-7 mr-10'} />
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" style={{ filter: 'invert(100%)' }} />
                </div>

                {/* <div style={{ backgroundColor: 'rgb(19,181,164)', transform: `rotate(134deg)`, position: 'absolute', width: '66%', bottom: '30%', right: '-14%' }}>
                    asd
                </div>
                <div style={{ backgroundColor: 'rgb(35,159,148)', transform: `rotate(90deg)`, width: '34%', position: 'absolute', bottom: '5%', right: '23%' }}>
                    asss
                </div>  */}
            </div>
            <div className={'h-2/6 w-full'}>
                <iframe src="http://maps.google.com/maps?q=33.994578,72.910633&z=16&output=embed" height="100%" width="100%"></iframe>
            </div>

        </div>
    );
}

export default Contact;
