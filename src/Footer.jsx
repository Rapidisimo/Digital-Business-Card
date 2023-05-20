
function Footer(props) {
    return(
        <footer>
            <ul>
                <li className="social-media twitter">
                    <a href={props.Twitter} target="_blank">
                        <svg width="32px" height="32px" strokeWidth="1.8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </li>
                <li className="social-media youtube">
                    <a href={props.YouTube} target="_blank">
                        <svg width="32px" height="32px" strokeWidth="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14 12l-3.5 2v-4l3.5 2z" fill="#000000" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z" stroke="#000000" strokeWidth="1.3"></path></svg>
                    </a>
                </li>
                <li className="social-media instagram">
                    <a href={props.Instagram} target="_blank">
                        <svg width="32px" height="32px" strokeWidth="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#000000" strokeWidth="1.3"></path><path d="M17.5 6.51l.01-.011" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </li>
                <li className="social-media github">
                    <a href={props.GitHub} target="_blank">
                    <svg width="32px" height="32px" strokeWidth="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer