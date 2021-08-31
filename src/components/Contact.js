import React from 'react';

const Contact = props => {
    return (
        <div className={'h-screen flex flex-row'}>

            <div className={'w-4/12 bg-gray-500 p-10'}>
                <p class={'text-white mb-7'}>
                    Contact information
                </p>
                <p class={'text-white text-white-200 mb-8'} style={{ color: 'rgb(231,250,246)' }}>
                    You can contact us any time. We will reply you to clear all of your doubts and everything which you have.
                </p>
                <p className={'text-white mb-4'}>
                    <img src="https://img.icons8.com/fluency-systems-regular/30/000000/phone.png" className={'inline-block mr-3'} style={{ filter: 'invert(100%)' }} />
                    +92 302 5894071
                </p>
                <div>
                    <img src="https://img.icons8.com/ios/23/000000/message-read.png" className={'inline-block mr-5'} style={{ filter: 'invert(100%)' }} />
                    <p className={'text-white inline-block relative top-1'}>

                        teamsevolution@outlook.com
                    </p>
                </div>
                <div className={'flex justify-start mt-8'}>
                    <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" style={{ filter: 'invert(100%)' }} className={'h-7 mr-10'}/>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" style={{ filter: 'invert(100%)' }}/>
                </div>
            </div>
            <div className={'w-8/12 bg-gray-900'}>

            </div>

        </div>
    );
}

export default Contact;
