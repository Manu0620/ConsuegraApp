import React from 'react';


export const Footer = () => {
    return(
        <footer className="mt-[-60px] relative -z-50 flex flex-col w-full min-h-[55vh] justify-center items-center bg-red-800 text-white text-pretty">
            <h1 className="text-5xl font-bold">Fin.</h1>
            <div className="social-media flex flex-row absolute inset-x-0 bottom-5 w-full justify-center text-white text-md font-medium"> 
                <a href="https://www.instagram.com/rmconsuegrasrl/" className="mx-2 flex items-center text-pretty"  target="_blank">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>
                    Instragam
                </a>
                <a href="https://www.facebook.com/rmconsuegra" className="mx-2 flex items-center text-pretty"  target="_blank">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                    </svg>
                    Facebook
                </a>
            </div>
        </footer>
    );
}