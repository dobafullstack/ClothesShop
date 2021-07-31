import React from 'react'
import '../assets/css/Language.css'

export default function Language() {
    return (
        <div className='language-wrapper'>
            <span>Language</span>
            <div className='list-language'>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="english" checked/>
                    <div className='custom-radio'></div>
                    <label for='english'>English</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="Українська"/>
                    <div className='custom-radio'></div>
                    <label for='Українська'>Українська</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="Français"/>
                    <div className='custom-radio'></div>
                    <label for='Français'>Français</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="Deutsche"/>
                    <div className='custom-radio'></div>
                    <label for='Deutsche'>Deutsche</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="Español"/>
                    <div className='custom-radio'></div>
                    <label for='Español'>Español</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="Polskie"/>
                    <div className='custom-radio'></div>
                    <label for='Polskie'>Polskie</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="Türkçe"/>
                    <div className='custom-radio'></div>
                    <label for='Türkçe'>Türkçe</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='language' value='English' id="한국어"/>
                    <div className='custom-radio'></div>
                    <label for='한국어'>한국어</label>
                </div>
            </div>
            <span>Currency</span>
            <div className='list-currency'>
                <div className='list-item'>
                    <input type='radio' name='currency' value='English' id="USD" checked/>
                    <div className='custom-radio'></div>
                    <label for='USD'>USD ( US Dollar )</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='currency' value='English' id="UAH"/>
                    <div className='custom-radio'></div>
                    <label for='UAH'>EUR ( Euro )</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='currency' value='English' id="PLN"/>
                    <div className='custom-radio'></div>
                    <label for='PLN'>PLN ( Polish Zloty )</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='currency' value='English' id="TRY"/>
                    <div className='custom-radio'></div>
                    <label for='TRY'>TRY ( Turkish Lira )</label>
                </div>
                <div className='list-item'>
                    <input type='radio' name='currency' value='English' id="KRW"/>
                    <div className='custom-radio'></div>
                    <label for='KRW'>KRW ( Korean Won )</label>
                </div>
            </div>
        </div>
    );
}
