import React from "react";
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div>
      <div class={styles.introheader}>
        <div class={styles.container} align="center">
          <div class={styles.customtabcontent} align="center">
            <div class="subscribe-panel">
              <h1>Want to get 10% off discount?</h1>
              <p>Subscribe to our newsletter and get it</p>

              <form action="" method="post">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i
                        class="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <input
                      type="text"
                      class="form-control input-lg"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div class="col-md-4"></div>
                <br />
                <br />
                <br />
                <button class="btn btn-warning btn-lg">Subscribe Now!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
