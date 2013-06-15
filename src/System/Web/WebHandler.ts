///<reference path='../Environment.ts'/>
///<reference path='IWebRequest.ts'/>
///<reference path='../../NodeJs/WebRequest.ts'/>

module System.Web {
    export class WebHandler { 
        public static request: IWebRequest;

        public static initialize() { 
            WebHandler.request = new NodeJs.WebRequest();
        }
    }
}