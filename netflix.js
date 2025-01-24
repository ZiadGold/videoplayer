function addModalOne() {
            // The giant chunk of HTML as a string
            var modalHTML = `
            
            <div id="one" lang="en" class="scope-trap_styles__wkbw190 modal_backgroundStyles__1wr85n11  default-ltr-cache-rr8094 entje4n2" dir="ltr" data-uia="player-modal+background" tabindex="-1">
                <div id="two" role="dialog" aria-modal="true" aria-labelledby=":r2a:" aria-describedby=":r2b:" class="modal_styles__1wr85n10" dir="ltr" data-uia="player-modal">
                    <span id=":r2a:" class="default-ltr-cache-ithvij-StyledScreenReaderLabel e1g2fp560">Limited Series Teaser: Asaf</span>
                    <span id=":r2b:" class="default-ltr-cache-ithvij-StyledScreenReaderLabel e1g2fp560"></span>
                    <div id="five" class="default-ltr-cache-yxz0j2 entje4n0">
                        <button id="six" data-uia="icon-button" title="Close" class="pressable_styles__a6ynkg0 button_styles__1kwr4ym0  default-ltr-cache-bnzzk2 e18xltav0" dir="ltr" role="button" type="button" onclick="closeModalOne()">
                            <div id="seven" aria-hidden="true" data-uia="icon-button+icon-wrapper" class="default-ltr-cache-mzvhg6 e18xltav1">
                                <svg id="nine" xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="XStandard" aria-hidden="true">
                                    <path id="ten" fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                    
                                            <video
        id="plyr"
        poster="https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcX-woMfv9-gFJ4EN_L5-MyeEQU3vRfxslp6TWwMwtstO3QVxJ5fV4Hhc_MEt1XUBnZdAMqfzmERRteLsfHI4XMrXqCkO1doK3UsPWKr0HjTOpNzWZa-i_Md.jpg?r=994"
      >

<source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-480p.mp4"
          type="video/mp4"
          size="480"
        />
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
          size="720"
        />
    </video>
                </div>
                            
                </div>
            <style>

            </style>
            `;

             modalHTML = `<video
        id="plyr"
        poster="https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcX-woMfv9-gFJ4EN_L5-MyeEQU3vRfxslp6TWwMwtstO3QVxJ5fV4Hhc_MEt1XUBnZdAMqfzmERRteLsfHI4XMrXqCkO1doK3UsPWKr0HjTOpNzWZa-i_Md.jpg?r=994"
      >

<source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-480p.mp4"
          type="video/mp4"
          size="480"
        />
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
          size="720"
        />
    </video><script src="https://cdn.plyr.io/3.6.4/plyr.js"></script>
    <script>
      const player = new Plyr('#plyr');
    </script>`

            // Adding the modal to the body
            document.body.insertAdjacentHTML("beforeend", modalHTML);
        }

        function closeModalOne() {
            // Remove the modal from the DOM
            const modal = document.querySelector(".modal_backgroundStyles__1wr85n11");
            if (modal) {
                modal.remove();
            }
        }
