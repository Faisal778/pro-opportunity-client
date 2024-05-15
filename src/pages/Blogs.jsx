import React from "react";

const Blogs = () => {
  return (
   <div>
     <div className="hero  shadow-lg rounded-lg my-5 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-lg ">
        <div className="rounded-lg px-5 ">
          <h1 className="text-3xl font-bold">What is an access token and refresh token? </h1>
          <p className="py-6">
            An access token is a temporary credential that give access to a protected resources, typically valid for a short period . It is used to authenticate API requests and access protected resources. On the other hand, a refresh token is used to obtain new access tokens once the
            current ones expire, allowing users to remain authenticated without re-entering their login credentials
          </p>
          <button className="btn btn-primary"><a href="https://medium.com/@greekykhs/springsecurity-what-is-the-difference-between-access-and-refresh-token-65296bcb13fc" target="_blank">Learn More</a></button>
        </div>
      </div>
    </div>

    <div className="hero  shadow-lg rounded-lg my-5 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-lg ">
        <div className="rounded-lg px-5 ">
          <h1 className="text-3xl font-bold">How do they work and where should
 we store them on the client side? </h1>
          <p className="py-6">
          Access tokens and refresh tokens work together to provide secure and efficient authentication for client applications. Access tokens are short-lived credentials that grant access to protected resources and should be stored securely, such as in an httpOnly cookie or in-memory in the client application. Refresh tokens, used to obtain new access tokens when the current ones expire, have a longer lifespan and can be stored in an httpOnly cookie with the SameSite attribute set or securely in local storage if the authorization server implements refresh token rotation. When the access token expires, the refresh token is used to get a new access token from the authorization server, and the old refresh token should be securely deleted after acquiring a new one. If the refresh token is invalid or revoked, the user should be prompted to log in again to get new tokens.
          </p>
          <button className="btn btn-primary"><a href="https://www.baeldung.com/cs/access-refresh-tokens#:~:text=An%20access%20token%20and%20a,it%20returns%20the%20desired%20resource." target="_blank">Learn More</a></button>
        </div>
      </div>
    </div>


    <div className="hero  shadow-lg rounded-lg my-5 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-lg ">
        <div className="rounded-lg px-5 ">
          <h1 className="text-3xl font-bold">What is express js? </h1>
          <p className="py-6">
          Express.js is a flexible Node.js web application framework for building web apps and APIs. It offers features like middleware, routing, and scalability, making it popular for various applications.
          </p>
          <button className="btn btn-primary"><a href="https://expressjs.com/" target="_blank">Learn More</a></button>
        </div>
      </div>
    </div>

    <div className="hero  shadow-lg rounded-lg my-5 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-lg ">
        <div className="rounded-lg px-5 ">
          <h1 className="text-3xl font-bold">What is Nest JS? </h1>
          <p className="py-6">
          Nest.js is a progressive Node.js framework for building scalable server-side applications using TypeScript. It provides a modular architecture, dependency injection, and support for various types of applications like REST APIs and WebSockets.
          </p>
          <button className="btn btn-primary"><a href="https://nodejs.org/en" target="_blank">Learn More</a></button>
        </div>
      </div>
    </div>


   </div>
  );
};

export default Blogs;
