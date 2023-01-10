import React, {useState, ChangeEvent} from "react";
import Logo from "./Logo";
import ProjectNavbar from "./Navbar";

function CatHttpCode() {
    const [statusCode, setStatusCode] = useState(0);

    const handleCatStatusCode = (event: ChangeEvent<HTMLSelectElement>) => {
        setStatusCode(Number(event.target.value));
    }

    return (
        <div className="container">
            <ProjectNavbar />

            <div className="container"
            style={{
                marginTop: 30
            }}  
            >

                <p>Select de HTTP status code a partir da API <a href="https://http.cat/" target='_blank'>HTTP Cats</a>.</p>

                <div className="d-flex justify-content-center" style={{ marginTop: 50}}>
                    <select className="form-control d-flex justify-content-center" style={{width: '20rem'}} onChange={handleCatStatusCode}>
                        <option value="0">Selecione um código de status HTTP</option>
                        <option value="100">100 - Continue</option>
                        <option value="101">101 - Switching Protocols</option>
                        <option value="102">102 - Processing</option>
                        <option value="103">103 - Early Hints</option>
                        <option value="200">200 - OK</option>
                        <option value="201">201 - Created</option>
                        <option value="202">202 - Accepted</option>
                        <option value="203">203 - Non-Authoritative Information</option>
                        <option value="204">204 - No Content</option>
                        <option value="206">206 - Partial Content</option>
                        <option value="207">207 - Multi-Status</option>
                        <option value="300">300 - Multiple Choices</option>
                        <option value="301">301 - Moved Permanently</option>
                        <option value="302">302 - Found</option>
                        <option value="303">303 - See Other</option>
                        <option value="304">304 - Not Modified</option>
                        <option value="305">305 - Use Proxy</option>
                        <option value="307">307 - Temporary Redirect</option>
                        <option value="308">308 - Permanent Redirect</option>
                        <option value="400">400 - Bad Request</option>
                        <option value="401">401 - Unauthorized</option>
                        <option value="402">402 - Payment Required</option>
                        <option value="403">403 - Forbidden</option>
                        <option value="404">404 - Not Found</option>
                        <option value="405">405 - Method Not Allowed</option>
                        <option value="406">406 - Not Acceptable</option>
                        <option value="407">407 - Proxy Authentication Required</option>
                        <option value="408">408 - Request Timeout</option>
                        <option value="409">409 - Conflict</option>
                        <option value="410">410 - Gone</option>
                        <option value="411">411 - Length Required</option>
                        <option value="412">412 - Precondition Failed</option>
                        <option value="413">413 - Payload Too Large</option>
                        <option value="414">414 - URI Too Long</option>
                        <option value="415">415 - Unsupported Media Type</option>
                        <option value="416">416 - Range Not Satisfiable</option>
                        <option value="417">417 - Expectation Failed</option>
                        <option value="418">418 - I'm a teapot</option>
                        <option value="420">420 - Enhance Your Calm</option>
                        <option value="421">421 - Misdirected Request</option>
                        <option value="422">422 - Unprocessable Entity</option>
                        <option value="423">423 - Locked</option>
                        <option value="424">424 - Failed Dependency</option>
                        <option value="425">425 - Too Early</option>
                        <option value="426">426 - Upgrade Required</option>
                        <option value="429">429 - Too Many Requests</option>
                        <option value="431">431 - Request Header Fields Too Large</option>
                        <option value="444">444 - No Response</option>
                        <option value='450'>450 - Blocked by Windows Parental Controls</option>
                        <option value="451">451 - Unavailable For Legal Reasons</option>
                        <option value="497">497 - HTTP to HTTPS</option>
                        <option value="498">498 - Invalid Token (Esri)</option>
                        <option value="499">499 - Client Closed Request</option>
                        <option value="500">500 - Internal Server Error</option>
                        <option value="501">501 - Not Implemented</option>
                        <option value="502">502 - Bad Gateway</option>
                        <option value="503">503 - Service Unavailable</option>
                        <option value="504">504 - Gateway Timeout</option>
                        <option value="506">506 - Variant Also Negotiates</option>
                        <option value="507">507 - Insufficient Storage</option>
                        <option value="508">508 - Loop Detected</option>
                        <option value="510">510 - Not Extended</option>
                        <option value="511">511 - Network Authentication Required</option>
                        <option value="521">521 - Web Server Is Down</option>
                        <option value="522">522 - Connection Timed Out</option>
                        <option value="523">523 - Origin Is Unreachable</option>
                        <option value="525">525 - SSL Handshake Failed</option>
                        <option value="599">599 - Network Connect Timeout Error</option>
                    </select>
                </div>

                <div className="d-flex justify-content-center" style={{ marginTop: 50}}>
                    <img src={`https://http.cat/${statusCode}`} alt="cat status code"/>
                </div>
            </div>
        </div>
    )
}

export default CatHttpCode
