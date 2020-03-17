import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeTab, changeActiveTab] = React.useState(0);

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background:
                  "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDg8QDw0ODw8PDw8NDw8PDQ0OFREWFhURFRUYHSggGBolHRUVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OFhAQGy0lHx4rLSstLTArLS0vKystLS0tKy0wLS0tLSsrKystKy0tLS0tLS0tLS0rLi0tLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwIEBQEHBgj/xABDEAACAgEBBAYFBwwBBAMAAAABAgADEQQFEiExBhNBUWGBIjJxkaEHUmKiseHiFCNCQ1NygqOywcLRM5Kzw/AWc4P/xAAXAQEBAQEAAAAAAAAAAAAAAAACAAED/8QAIREBAQACAgMAAwEBAAAAAAAAAAECERIhAzFBIjJh8cH/2gAMAwEAAhEDEQA/APDYQhJCEISQhCEkIQhJCE7idCySM7iTCRyUzdM2rhZIVS6mnj1003Q3Jmimd6mao007+TS0zmyDTImszXOmin08tLmyys5iXn08Q9UzRTJXhJlZzEwkYTuJySEIQkhCEJIQhCSEIQkhCEJIQhCSEJ0CSAkkQJILJBZMLN0zaAWTVIxUlmmmbobS6qJcq08fRRPpejOx+vtUYzxAjmO3LLNmaDYNtnqqfdNB+jFyjJU+6e8bN2LpNn0B7gm9wyzDIDH9ECPr2js+/wBEhOPD0kC/ETdz5Gcb9un51s2cy8GXEj+ST3fbvQmq1S9GM4zu88+wz4zS9DbGt3Qp58scopJe455csbqvP6tlO/qrLJ6LXEZ3T7p7psnolptMu9dukjnk4Qf7ll9tbPRhVhOIPKsbuBjP2iZufJs+N+3T82a/Y9lXrKfdMq3Tz9LdLOi+n1NDXUKoO7vej6rL3junhG2NndXYy47ZmpZuN3cbqvlLaZXZJtXUSjdVBY6TJRKyJEeyyBWHR7JxORhEiRMajCEJNEIQkhCEJIQhCSE6BACTAkgBJqsFEYqxSC4FjFWSVY1EmyDa7VXL+npi9PXNTTVRyOeVT09E9J+TDRg3oSORz7uM+I01M9H+Thd25OHePeMTpJ1XHf5Rs/KU5ZBUCQCh4jmCcjP2T4HZN9jIj8mI9IA+q44MvkQR5T0vploGtZMDPo4+Jnz+xuilqtYChCG0uvokDDgM31y585uE/GLybuVbXRLX3khOLL2g9nj4T68oBlgo3iPYW8Myps3QLp68KMvjjy4nuiqV1ItLMMqeY3l5e+cstZW2f674bwkl3f8Aj4/pTtG9mIOQBkbvICfDaxmF1BJPpM9fmUL/APjM9l25shb13gPT+2fC7Y6L2gBgjZrsSwcD6oOG+qWnXGzKdOGeOWOXfb67oVaX0xRuIBxx7iOU8k6baMLc2OxjPYeiWmNVLZ7SPgPvnmHTKstaxx+kYZPyyLK/hg881FEzdRTPo9TTMrU1Q2NxyYVtcSyzRvrlRlgsdpVVliyJZZYtlhsOUgiRjSJAiFqEJ2ck0QhCSE6JySEk6BJqJxRGKJsFJRGqs4gjVEUGuqsfUkiqyzSscg2rOmrmxodOWIAHGUNMk9F+T7YYvsXe5cye4TpJ9cMu+otdGOiFl2CVwvax5Ceh7N2FRpQGLekO0ndGfDvnNs7Wr0SCusANjgOxR3nxnx1m2rLX3mYnj3ynLP8AkV4+P+16Nq9SK038b3LGPGc0eoNi75XdXs45PtlTZdgv04U8wMH7QZHbOsFK1VLw61tz2AIzf4zlxn6/du/O/v8ANIanarbxFeMDwzIHadvh7obN0m/xPIc+/wBk0zoa8YxjxyczplcMbrTnjPJlN7VNn7SLtuvgE8jy4x+u1ppIyu8rdoOCDMvW0GtvZxB7xNOhl1FWDzBGfAjtmZY4zWWum45ZauO+1gWLubx9FWGTnxmDtXotTqAWrbieWeKnzEl0x1rU0AVjeI9JkHrMg7F8e3HbjHbPk9l9JXTddH3q2wRg5VhLDC63KzyZ4745Tb5/pL0XsoJypH2ET4jV04yDP0ZTbTtCgggZxxHard48J4v0y2X1FrDGMEgxS79+4Fx46s9V8LqElCxZr6lJnWrBY641TZYpllp1iWEFOVWYRZEsMIphDThJEjGESBha5CEJNEmJESYkxNRGqItY1IoNNURyCLSOQRwaYglqkRCCWqY4FaGmE9c+S3VKG3TjLKQPb/6J5Lpp9L0f2g1Lgg4wY9bmnK3VlekdN9mWNZ1gyVYDyIHKfM6aoggET7rYfSSnVKa7sbwCg59Vsj4GO1XRutjv1EDtweXkZY58fxyWfj5flgd0ZpK1bx7f7Sn0qpYNTZzAuq8sncP9U19Qpqo3VHEADh8ZCsDU0br+sCp/iUgg/CCZXlz+OlxnGeP77c2NaCCvbzHiJpT5Ylq2I4gg9nMR7bSsIxvHHkD74s/DcruMw80k1TdqapHYhCG3Ca2x2OOa+WZa2JQVQsf0uXs75g7D0zPZcpHD8ods/RKqf7zf2pqOrVa0HFh2dgGJZTqeOMxu7fJfjJ6YUng3YR7iJ5xdoXSwtSCyOxNtI+cedlfcx7V5HnwOd72DWabr6ACPSIB48OPbKWj2DTT6dpBI48eCj/csfJJjq+4zPxZXPc9VT6D6Bq6zY3quMLnhnxnnvyj6lbL7CvLeM+26W9KxVWyaficYPZvL81e6eR7S1vXnrAcq3EZyD5g8j4Sxl3cr9WVmpjPjC1ImbcJqamZ1omUsVRxEOJZcRLiCukVnEUwj2ES0FOEtIGMaQMNJCEITGuiTWQEmsmGrGpFLGpHBp6RyRCR6RQKfXLNUrJLFZjg1o6czV0zTGoaaenedI5ZRtbK1TJbbg/s/6Z6N0R2nbY6pvHBPEZ4Ynlehf85b/wDn/TPRugDg2r5/YYr+tCfvH2+0tpigqCM5GeeIqrbtBxzBJA7OZOBMbpoxDL+6PtM+R1OpI6kA+tfWPdlv8Zzw8WNxlrpn5c5nZHqtlVbDfZQwxnOM8JWV9MTgAE9262Zl9Htqk4RskHke4zaTR1ozWYx2+C98Fx4XV3/HXHLnJcZP6mRXSpbAUduBxMzNV0jorKjBJdt0chx3Wb7FMwekm2mNyIOFbrYo/wDsXBA9pXfP8M+X21eer3weNTpd3ndRgXA8Sm8POPHwzW8vbll5rvWPp6ps/WdchYDHHHf2Tzfpftq1HQljui0K/PgrgqPrFfLM+16HnNTd2Rj4zz3piFayxSMq28pHeDwM3CSZZSM8mVuGNrB115bOTPl7NUEstQqwU2ZVsAplkUsOHLiSfOai3txrc5srx6Rx+dTss8+3xB7MTMZ8vcPpL/21m5VmM0Re0o2S1cZUcwV0hDxDxzxDwV0hLxLRzxLQUoU0W0Y0W0NNCEITGuiTEXJCSOUxqxCmNUxQasIY5DK6GNQxwKtIZYQyohjkaKBV6ppfosmUjSzVZHKFjX0dv5yz2J9hn23Q3aQruQnsI90870135x/3a/8AKa+j1hQggxyueU7e6dINm/lVatXgkDh9JTPmKeiN7vUWG6K7C5LcP1br/lM7YHTZqlCsQy9zdk1NT8oPpBEVQSjtniSMFR/l8IJM8ZqHb48ru+31Wl0VOkTeYjPef7CVquktZs3TwQ8Ae0eM8+2j0ksuJyxPnM1dcQc54xTxy/t3Rvls6w6j1LbOwKtUgeoqHDB0I9XeH2ZBIPgTPn7ui9+9jcyPIjExtl9K7KeTHHceIM23+UHdXPVq2OeM73tAzx9kzWePrtu/Hl76fR6DTroNHuseKKce7CrntwMTxzpDrrOtbh1qZOCrBbR4EHgfbkeybHSPpgdYnov6OTums4KN/vvB858Rfq7QTvqLPpVkK3mrH7D5SxnH37qyvKyT1CdbqVYjGVuUncFgKbxxxTJ4EEd2eQPZM+q8M9rDkWU8ef8Axpzj9Rq0bKtwB4YsUqCfDPA+Uy9Od17FyCd4twIJwcYJx29/jDb2WM6WbGldzJu0Q7TKcLcxLmTcxLGClEHMS0m5imMNOINFmTYxZhpOQhCY0TonISRgMYpiQZNTNjFhTHK0rKYxWigWLStHK0qK0arRSjYuI8ejyirRyvFKNi3Tb+cb9yv+p5fqvmMr+n7V+w/fLK2xSjY269RO1anNrdy1oB7Sz5/pEyUvhRqPSsP0gB7Ai/3Ji2PF9CNTJflMxRqJ38oi2PFrtqYl9T4zMOoi21EzkuKzqN0ne4h/nISrHuBI5jwOZSsvcfphv3xusf4l4fCRe6Jd8w2nI5ZqM8GG7nhngUPhn/eJUNYVxjmUJ+sRiTsHPHI8weIMphyH3WPpLvKeIbgeI4jnBaelx2iWaDNEs0y0pAzRTGDNFMYbSkcYxbGdYxZMNKOEyMCZyEhCEJIQhCSdkgZCSCyRimMVotU8Y1avH4RQamrRitIpp/H4Ry6X6Xw++KbG6CvGq86miPzvq/fHJs8/P+r98UlG2E7/AKSn94e/B/tHCyTs2aQAd/ky/o8gTgnn2AmWl2Of2n1PxTZKNsVRZOUWcD4s39RAmimwif1v8v8AFDR7BL1o3W43lDf8eeYz86LjkzcU+th1s1R0ab9t/K/FO/8Axlv238r8U3jkzcZJtkTZNZujbftv5X4otuj5H63+X+KXHJu4yjZIF5pPsQj9b/L/ABRL7II/WfU++HjW7jPZ5nWH0mYcww92JtPsw/P+p98ybqcPYCeTADhzyOfPwMGUp42GF8xbNJVac8BvcCCeXIZ9sk2m+l8PvmdrpXZotmjmo8fhFNV4/CGlCiZEmTZPGLIhJyEISaIQhJCEISTojFixJrJhyRyRCGPQxwasJLFcrIZYQxwKtVy1WJUrMs1tHHOrQrDAqeTAg+wiWNExZRn1h6LdnpA4Pl2+cr1tJb/VsX/QbHWfRI4Cz3cD4Ad0bGvSOUlshfzFPhVWD7QoERVZJaC7dLVnmrMy/SrYkgjwGd3+HxjntjZrQRrVCUk1EmdTHtiVqCU7VjLL5WssmVEWiVLBLFjyrY0FStYJgbVQLYrZxkjjjhjh9hGf4pt33qvrMo9pAmRtLUVOuN8ZByMZP2Tjn6dcPZVVnpYPDgR55zGPMzLdgYgciAcjwjl1T49JCT34InOZHcTXiHnW1GewjyMU9vgfdMtbEXimkmfwkCYaaMIQmNEIQkhCEJISamQnRJHKY5DKymMVopRsW0aWEaUkaOR4pQsXkeWEeZ6PHJZHKFjSSyWUtmWlsatsco2L6Ar/AMbbo7UYZTy+b5cPCSsuLAb9ZJB4GqwZXxBJUjylRbpMXTdsWV1Ng9V39lqKwH/Tg/GTXW3dprPsR1/yMqi4TvXCW0snX2dqg+w4le3V6hvVVFHeSzH+wnDfFtfLbJiS9epb1tRujuRVHxlHX6E7oJsschs+mxIxNBromyzMFkOWkVaOnAO4M+PGSIUcgB7ABIl8RT2TOmuu8Q7Qd4h3htKQO0SxgzRTNDacjjGLJnSZGAhCEJNEIQkhCEJIQhCSdBkg0hCSPVoxXlYGSDTdjpcWyNWyUQ8mtkW2WNBbIxbZniyTFsWx00RdJC6ZwtkhbN5M4tHroddM/rZ3rZcmcV83SJulHrZE2y5LiuNdINbKhtkTZM23isNZFNZEmyLLzNlIczxTPFl5AtDstJM0gTOEzkLRCEJNEIQkhCEJIQhCSEIQkhCEJIQhCSdzOhpGEkYHkg8TCW2aPFk71kRmGZu1pY6yHWSvmG9La0sdZOdZEZhmW1o4vIl4vM5La0mWnC0jCY13M5CEkIQhJCEISQhCEkIQhJP/2Q==) center / cover"
              }}
            >
              Knode
            </CardTitle>
            <CardText>
              This is a passion project of mine that is currently in progress.
              Since college i've thought the internet is the ideal place to learn and improve youself. 
              I want to bring that to everyone, so myself along with a few friends have started creating a website 
              where people can post what they know and others can learn from it in a pragmatic and meaningful way.
              Please check it out! If you wish to help I'd love any support availible. just check out my contact page 
              to get ahold of me.
            </CardText>
            <CardActions border>
              <Button href={"https://www.knode.app"} target={"_blank"} colored>Website</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background:
                  "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDg8QDw0ODw8PDw8NDw8PDQ0OFREWFhURFRUYHSggGBolHRUVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OFhAQGy0lHx4rLSstLTArLS0vKystLS0tKy0wLS0tLSsrKystKy0tLS0tLS0tLS0rLi0tLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwIEBQEHBgj/xABDEAACAgEBBAYFBwwBBAMAAAABAgADEQQFEiExBhNBUWGBIjJxkaEHUmKiseHiFCNCQ1NygqOywcLRM5Kzw/AWc4P/xAAXAQEBAQEAAAAAAAAAAAAAAAACAAED/8QAIREBAQACAgMAAwEBAAAAAAAAAAECERIhAzFBIjJh8cH/2gAMAwEAAhEDEQA/APDYQhJCEISQhCEkIQhJCE7idCySM7iTCRyUzdM2rhZIVS6mnj1003Q3Jmimd6mao007+TS0zmyDTImszXOmin08tLmyys5iXn08Q9UzRTJXhJlZzEwkYTuJySEIQkhCEJIQhCSEIQkhCEJIQhCSEJ0CSAkkQJILJBZMLN0zaAWTVIxUlmmmbobS6qJcq08fRRPpejOx+vtUYzxAjmO3LLNmaDYNtnqqfdNB+jFyjJU+6e8bN2LpNn0B7gm9wyzDIDH9ECPr2js+/wBEhOPD0kC/ETdz5Gcb9un51s2cy8GXEj+ST3fbvQmq1S9GM4zu88+wz4zS9DbGt3Qp58scopJe455csbqvP6tlO/qrLJ6LXEZ3T7p7psnolptMu9dukjnk4Qf7ll9tbPRhVhOIPKsbuBjP2iZufJs+N+3T82a/Y9lXrKfdMq3Tz9LdLOi+n1NDXUKoO7vej6rL3junhG2NndXYy47ZmpZuN3cbqvlLaZXZJtXUSjdVBY6TJRKyJEeyyBWHR7JxORhEiRMajCEJNEIQkhCEJIQhCSE6BACTAkgBJqsFEYqxSC4FjFWSVY1EmyDa7VXL+npi9PXNTTVRyOeVT09E9J+TDRg3oSORz7uM+I01M9H+Thd25OHePeMTpJ1XHf5Rs/KU5ZBUCQCh4jmCcjP2T4HZN9jIj8mI9IA+q44MvkQR5T0vploGtZMDPo4+Jnz+xuilqtYChCG0uvokDDgM31y585uE/GLybuVbXRLX3khOLL2g9nj4T68oBlgo3iPYW8Myps3QLp68KMvjjy4nuiqV1ItLMMqeY3l5e+cstZW2f674bwkl3f8Aj4/pTtG9mIOQBkbvICfDaxmF1BJPpM9fmUL/APjM9l25shb13gPT+2fC7Y6L2gBgjZrsSwcD6oOG+qWnXGzKdOGeOWOXfb67oVaX0xRuIBxx7iOU8k6baMLc2OxjPYeiWmNVLZ7SPgPvnmHTKstaxx+kYZPyyLK/hg881FEzdRTPo9TTMrU1Q2NxyYVtcSyzRvrlRlgsdpVVliyJZZYtlhsOUgiRjSJAiFqEJ2ck0QhCSE6JySEk6BJqJxRGKJsFJRGqs4gjVEUGuqsfUkiqyzSscg2rOmrmxodOWIAHGUNMk9F+T7YYvsXe5cye4TpJ9cMu+otdGOiFl2CVwvax5Ceh7N2FRpQGLekO0ndGfDvnNs7Wr0SCusANjgOxR3nxnx1m2rLX3mYnj3ynLP8AkV4+P+16Nq9SK038b3LGPGc0eoNi75XdXs45PtlTZdgv04U8wMH7QZHbOsFK1VLw61tz2AIzf4zlxn6/du/O/v8ANIanarbxFeMDwzIHadvh7obN0m/xPIc+/wBk0zoa8YxjxyczplcMbrTnjPJlN7VNn7SLtuvgE8jy4x+u1ppIyu8rdoOCDMvW0GtvZxB7xNOhl1FWDzBGfAjtmZY4zWWum45ZauO+1gWLubx9FWGTnxmDtXotTqAWrbieWeKnzEl0x1rU0AVjeI9JkHrMg7F8e3HbjHbPk9l9JXTddH3q2wRg5VhLDC63KzyZ4745Tb5/pL0XsoJypH2ET4jV04yDP0ZTbTtCgggZxxHard48J4v0y2X1FrDGMEgxS79+4Fx46s9V8LqElCxZr6lJnWrBY641TZYpllp1iWEFOVWYRZEsMIphDThJEjGESBha5CEJNEmJESYkxNRGqItY1IoNNURyCLSOQRwaYglqkRCCWqY4FaGmE9c+S3VKG3TjLKQPb/6J5Lpp9L0f2g1Lgg4wY9bmnK3VlekdN9mWNZ1gyVYDyIHKfM6aoggET7rYfSSnVKa7sbwCg59Vsj4GO1XRutjv1EDtweXkZY58fxyWfj5flgd0ZpK1bx7f7Sn0qpYNTZzAuq8sncP9U19Qpqo3VHEADh8ZCsDU0br+sCp/iUgg/CCZXlz+OlxnGeP77c2NaCCvbzHiJpT5Ylq2I4gg9nMR7bSsIxvHHkD74s/DcruMw80k1TdqapHYhCG3Ca2x2OOa+WZa2JQVQsf0uXs75g7D0zPZcpHD8ods/RKqf7zf2pqOrVa0HFh2dgGJZTqeOMxu7fJfjJ6YUng3YR7iJ5xdoXSwtSCyOxNtI+cedlfcx7V5HnwOd72DWabr6ACPSIB48OPbKWj2DTT6dpBI48eCj/csfJJjq+4zPxZXPc9VT6D6Bq6zY3quMLnhnxnnvyj6lbL7CvLeM+26W9KxVWyaficYPZvL81e6eR7S1vXnrAcq3EZyD5g8j4Sxl3cr9WVmpjPjC1ImbcJqamZ1omUsVRxEOJZcRLiCukVnEUwj2ES0FOEtIGMaQMNJCEITGuiTWQEmsmGrGpFLGpHBp6RyRCR6RQKfXLNUrJLFZjg1o6czV0zTGoaaenedI5ZRtbK1TJbbg/s/6Z6N0R2nbY6pvHBPEZ4Ynlehf85b/wDn/TPRugDg2r5/YYr+tCfvH2+0tpigqCM5GeeIqrbtBxzBJA7OZOBMbpoxDL+6PtM+R1OpI6kA+tfWPdlv8Zzw8WNxlrpn5c5nZHqtlVbDfZQwxnOM8JWV9MTgAE9262Zl9Htqk4RskHke4zaTR1ozWYx2+C98Fx4XV3/HXHLnJcZP6mRXSpbAUduBxMzNV0jorKjBJdt0chx3Wb7FMwekm2mNyIOFbrYo/wDsXBA9pXfP8M+X21eer3weNTpd3ndRgXA8Sm8POPHwzW8vbll5rvWPp6ps/WdchYDHHHf2Tzfpftq1HQljui0K/PgrgqPrFfLM+16HnNTd2Rj4zz3piFayxSMq28pHeDwM3CSZZSM8mVuGNrB115bOTPl7NUEstQqwU2ZVsAplkUsOHLiSfOai3txrc5srx6Rx+dTss8+3xB7MTMZ8vcPpL/21m5VmM0Re0o2S1cZUcwV0hDxDxzxDwV0hLxLRzxLQUoU0W0Y0W0NNCEITGuiTEXJCSOUxqxCmNUxQasIY5DK6GNQxwKtIZYQyohjkaKBV6ppfosmUjSzVZHKFjX0dv5yz2J9hn23Q3aQruQnsI90870135x/3a/8AKa+j1hQggxyueU7e6dINm/lVatXgkDh9JTPmKeiN7vUWG6K7C5LcP1br/lM7YHTZqlCsQy9zdk1NT8oPpBEVQSjtniSMFR/l8IJM8ZqHb48ru+31Wl0VOkTeYjPef7CVquktZs3TwQ8Ae0eM8+2j0ksuJyxPnM1dcQc54xTxy/t3Rvls6w6j1LbOwKtUgeoqHDB0I9XeH2ZBIPgTPn7ui9+9jcyPIjExtl9K7KeTHHceIM23+UHdXPVq2OeM73tAzx9kzWePrtu/Hl76fR6DTroNHuseKKce7CrntwMTxzpDrrOtbh1qZOCrBbR4EHgfbkeybHSPpgdYnov6OTums4KN/vvB858Rfq7QTvqLPpVkK3mrH7D5SxnH37qyvKyT1CdbqVYjGVuUncFgKbxxxTJ4EEd2eQPZM+q8M9rDkWU8ef8Axpzj9Rq0bKtwB4YsUqCfDPA+Uy9Od17FyCd4twIJwcYJx29/jDb2WM6WbGldzJu0Q7TKcLcxLmTcxLGClEHMS0m5imMNOINFmTYxZhpOQhCY0TonISRgMYpiQZNTNjFhTHK0rKYxWigWLStHK0qK0arRSjYuI8ejyirRyvFKNi3Tb+cb9yv+p5fqvmMr+n7V+w/fLK2xSjY269RO1anNrdy1oB7Sz5/pEyUvhRqPSsP0gB7Ai/3Ji2PF9CNTJflMxRqJ38oi2PFrtqYl9T4zMOoi21EzkuKzqN0ne4h/nISrHuBI5jwOZSsvcfphv3xusf4l4fCRe6Jd8w2nI5ZqM8GG7nhngUPhn/eJUNYVxjmUJ+sRiTsHPHI8weIMphyH3WPpLvKeIbgeI4jnBaelx2iWaDNEs0y0pAzRTGDNFMYbSkcYxbGdYxZMNKOEyMCZyEhCEJIQhCSdkgZCSCyRimMVotU8Y1avH4RQamrRitIpp/H4Ry6X6Xw++KbG6CvGq86miPzvq/fHJs8/P+r98UlG2E7/AKSn94e/B/tHCyTs2aQAd/ky/o8gTgnn2AmWl2Of2n1PxTZKNsVRZOUWcD4s39RAmimwif1v8v8AFDR7BL1o3W43lDf8eeYz86LjkzcU+th1s1R0ab9t/K/FO/8Axlv238r8U3jkzcZJtkTZNZujbftv5X4otuj5H63+X+KXHJu4yjZIF5pPsQj9b/L/ABRL7II/WfU++HjW7jPZ5nWH0mYcww92JtPsw/P+p98ybqcPYCeTADhzyOfPwMGUp42GF8xbNJVac8BvcCCeXIZ9sk2m+l8PvmdrpXZotmjmo8fhFNV4/CGlCiZEmTZPGLIhJyEISaIQhJCEISTojFixJrJhyRyRCGPQxwasJLFcrIZYQxwKtVy1WJUrMs1tHHOrQrDAqeTAg+wiWNExZRn1h6LdnpA4Pl2+cr1tJb/VsX/QbHWfRI4Cz3cD4Ad0bGvSOUlshfzFPhVWD7QoERVZJaC7dLVnmrMy/SrYkgjwGd3+HxjntjZrQRrVCUk1EmdTHtiVqCU7VjLL5WssmVEWiVLBLFjyrY0FStYJgbVQLYrZxkjjjhjh9hGf4pt33qvrMo9pAmRtLUVOuN8ZByMZP2Tjn6dcPZVVnpYPDgR55zGPMzLdgYgciAcjwjl1T49JCT34InOZHcTXiHnW1GewjyMU9vgfdMtbEXimkmfwkCYaaMIQmNEIQkhCEJISamQnRJHKY5DKymMVopRsW0aWEaUkaOR4pQsXkeWEeZ6PHJZHKFjSSyWUtmWlsatsco2L6Ar/AMbbo7UYZTy+b5cPCSsuLAb9ZJB4GqwZXxBJUjylRbpMXTdsWV1Ng9V39lqKwH/Tg/GTXW3dprPsR1/yMqi4TvXCW0snX2dqg+w4le3V6hvVVFHeSzH+wnDfFtfLbJiS9epb1tRujuRVHxlHX6E7oJsschs+mxIxNBromyzMFkOWkVaOnAO4M+PGSIUcgB7ABIl8RT2TOmuu8Q7Qd4h3htKQO0SxgzRTNDacjjGLJnSZGAhCEJNEIQkhCEJIQhCSdBkg0hCSPVoxXlYGSDTdjpcWyNWyUQ8mtkW2WNBbIxbZniyTFsWx00RdJC6ZwtkhbN5M4tHroddM/rZ3rZcmcV83SJulHrZE2y5LiuNdINbKhtkTZM23isNZFNZEmyLLzNlIczxTPFl5AtDstJM0gTOEzkLRCEJNEIQkhCEJIQhCSEIQkhCEJIQhCSdzOhpGEkYHkg8TCW2aPFk71kRmGZu1pY6yHWSvmG9La0sdZOdZEZhmW1o4vIl4vM5La0mWnC0jCY13M5CEkIQhJCEISQhCEkIQhJP/2Q==) center / cover"
              }}
            >
              Weather App
            </CardTitle>
            <CardText>
              This is the first react project I took on. It's a fairly simple weather app using a third party api for the 
              results. I then simply take the results and pass them as props to a component for viewing. 
            </CardText>
            <CardActions border>
              <Button href={"https://github.com/bettet01/React_WeatherApp_Portfolio"} target={"_blank"} colored>Github</Button>
              <Button href={"https://ethan-weatherapp.herokuapp.com/"} target={"_blank"} colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover"
              }}
            >
              Chat App
            </CardTitle>
            <CardText>
              This was a fun project using an api backend to host the chat functions. It's a slack style chat app that allows 
              new channels to be made. I also have new user functionality that is commented out due to new user costs from the 
              service. So check it out and type something for me to see!
               (Note: this is a public chat room and anyone that visits will see what was posted. please be considerate in your messages.)
            </CardText>
            <CardActions border>
              <Button href={"https://github.com/bettet01/React_ChatApp_Portfolio"} target={"_blank"} colored>Github</Button>
              <Button href={"https://ethan-chat-app.herokuapp.com/"} target={"_blank"} colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab === 1) {
      return(      
      <div className="projects-grid">
      <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "250px",
            background:
              "url(https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg) center / cover"
          }}
        >
          Vending Machine Backend
        </CardTitle>
        <CardText>
          This was a fun project put together by the Software Guild that took user input from the command line 
          and vended an item. It included a pretty robust set of user checks and validation which made it a great learning tool.
          Included in the project is a strict MVC file structure and Junit Service testing.
        </CardText>
        <CardActions border>
          <Button href={"https://github.com/The-Software-Guild/java-mpls-0220-bettet01/tree/master/Summatives/VendingMachine"} target={"_blank"} colored>Github</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
        </CardMenu>
      </Card>
      <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "250px",
            background:
              "url(https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg) center / cover"
          }}
        >
          BattleShip
        </CardTitle>
        <CardText>
          As a fun side project, two collegues and myself created a neat battleship game on the JVM command line.
          Part of the fun of this project was working in a group on a project with very little code, which was a fun exercise in planning
          and group work. I was mainly involved in creating the game logic in the programs service layer and controller.
        </CardText>
        <CardActions border>
          <Button href={"https://github.com/bettet01/BattleShip"} target={"_blank"} colored>Github</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
        </CardMenu>
      </Card>
      <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "250px",
            background:
              "url(https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg) center / cover"
          }}
        >
          Flooring Sales Backend
        </CardTitle>
        <CardText>
          This project was a fun cumulative of some java skills I've picked up courtesy of the Software Guild.
          This project implements the following features and coding practices: MVC, Spring, Junit, Audit Writing, File Writing,
          Error Handling, User Validation, Java 11 Streams, Agile Creation, CRUD Operations, and much More! 
        </CardText>
        <CardActions border>
          <Button href={"https://github.com/The-Software-Guild/java-mpls-0220-bettet01/tree/mastery-oop/Mastery/flooringmastery"} target={"_blank"} colored>Github</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
        </CardMenu>
      </Card>
        </div>
    )
    } else if (activeTab === 2) {
      return(      
        <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "250px",
              background:
                "url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/01/c74920g.jpg) center / cover"
            }}
          >
            ML Examples
          </CardTitle>
          <CardText>
            This is a repo of some my first machine learning algorithms. This is an area I was always interested in 
            so after a couple of books and tensorflow courses I decided to try to create some easy test projects. 
            I now use this as a basic cookbook for creating CNN's and regression algorithms.
          </CardText>
          <CardActions border>
            <Button href={"https://github.com/bettet01/ML_training"} target={"_blank"} colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "350px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "250px",
              background:
                "url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/01/c74920g.jpg) center / cover"
            }}
          >
            Web Scraper
          </CardTitle>
          <CardText>
            An intermediate level web scraper created from scratch to parse only certain tags of a website. 
            I used this tool to assist in some Pen-Testing games and as such, I do not have the code publicly. If you'd like to 
            take a look at the source code please message me and I will happily display it. There are plenty web scrapers out there 
            and I don't feel the need the further the cause.
          </CardText>
        </Card>
          </div>
      )
    }
  };

  return (
    <div className="category-tabs">
      <Tabs
        activetab={activeTab}
        onChange={tabId => changeActiveTab(tabId)}
        ripple
      >
        <Tab>React</Tab>
        <Tab>Java</Tab>
        <Tab>Python</Tab>
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories()}</div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Projects;
