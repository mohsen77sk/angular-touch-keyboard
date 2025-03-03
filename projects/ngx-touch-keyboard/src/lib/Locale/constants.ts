/**
 * A collection of constants representing special function buttons for a touch keyboard.
 * Each constant is a string that corresponds to a specific keyboard action.
 */
export const fnButton = {
  DONE: `{done}`,
  ENTER: `{enter}`,
  SHIFT: `{shift}`,
  BACKSPACE: `{backspace}`,
  LANGUAGE: `{language}`,
  SPACE: `{space}`,
  TAB: `{tab}`,
};

/**
 * An object containing SVG icons for various keyboard functions.
 */
export const fnDisplay = {
  DONE: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path d="m12 15-5-5h10Z"/></svg>`,
  ENTER: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path d="m9 18-6-6 6-6 1.4 1.4L6.8 11H19V7h2v6H6.8l3.6 3.6Z"/></svg>`,
  SHIFT: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path d="M10.8796773,2.4676627 C10.7983669,2.53542133 10.7233714,2.61041687 10.6556128,2.69172724 L2.79065437,12.1296773 C2.17191723,12.8721619 2.27223434,13.9756501 3.01471891,14.5943872 L3.15432027,14.6993778 C3.44275103,14.8945506 3.78413686,15 4.13504161,15 L6.999,15 L7,20.25 C7,21.2164983 7.78350169,22 8.75,22 L15.25,22 L15.3935272,21.9941988 C16.2928897,21.9211923 17,21.1681734 17,20.25 L16.999,15 L19.8649584,15 C20.8314567,15 21.6149584,14.2164983 21.6149584,13.25 C21.6149584,12.8406111 21.47143,12.4441786 21.2093456,12.1296773 L13.3443872,2.69172724 C12.7600244,1.99049181 11.7432755,1.8620539 11.0066223,2.37118457 L10.8796773,2.4676627 Z M12.1920553,3.65200384 L20.0570137,13.0899539 C20.0944543,13.1348827 20.1149584,13.1915159 20.1149584,13.25 C20.1149584,13.3880712 20.0030296,13.5 19.8649584,13.5 L16.25,13.5 C15.8357864,13.5 15.5,13.8357864 15.5,14.25 L15.5,20.25 C15.5,20.3880712 15.3880712,20.5 15.25,20.5 L8.75,20.5 C8.61192881,20.5 8.5,20.3880712 8.5,20.25 L8.5,14.25 C8.5,13.8357864 8.16421356,13.5 7.75,13.5 L4.13504161,13.5 C4.07655749,13.5 4.01992426,13.4794959 3.97499551,13.4420553 C3.86892629,13.3536643 3.85459527,13.1960231 3.94298629,13.0899539 L11.8079447,3.65200384 C11.8176245,3.64038807 11.8283381,3.62967442 11.8399539,3.61999462 C11.9460231,3.5316036 12.1036643,3.54593461 12.1920553,3.65200384 Z"></path></svg>`,
  BACKSPACE: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path d="M18.75,4 C20.4830315,4 21.8992459,5.35645477 21.9948552,7.06557609 L22,7.25 L22,16.75 C22,18.4830315 20.6435452,19.8992459 18.9344239,19.9948552 L18.75,20 L10.2488122,20 C9.48467584,20 8.74731983,19.7308489 8.16441163,19.243553 L8.00936186,19.1052839 L3.01367221,14.3552839 C1.71288481,13.1184697 1.66102433,11.0613371 2.89783857,9.76054971 L3.01367221,9.64471607 L8.00936186,4.89471607 C8.56313355,4.36817906 9.28295917,4.05514987 10.0411712,4.00663485 L10.2488122,4 L18.75,4 Z M18.75,5.5 L10.2488122,5.5 C9.85605678,5.5 9.47644043,5.63205173 9.16975262,5.87226779 L9.04295431,5.98177019 L4.04726465,10.7317702 L3.98489269,10.7941421 C3.3580909,11.4533647 3.34595643,12.473346 3.93064574,13.1462921 L4.04726465,13.2682298 L9.04295431,18.0182298 C9.32758521,18.2888625 9.69368599,18.4547433 10.0814672,18.4919848 L10.2488122,18.5 L18.75,18.5 C19.6681734,18.5 20.4211923,17.7928897 20.4941988,16.8935272 L20.5,16.75 L20.5,7.25 C20.5,6.3318266 19.7928897,5.57880766 18.8935272,5.5058012 L18.75,5.5 Z M11.4462117,8.39705176 L11.5303301,8.46966991 L14.000116,10.939 L16.4696699,8.46966991 C16.7625631,8.1767767 17.2374369,8.1767767 17.5303301,8.46966991 C17.7965966,8.73593648 17.8208027,9.15260016 17.6029482,9.44621165 L17.5303301,9.53033009 L15.061116,12 L17.5303301,14.4696699 C17.8232233,14.7625631 17.8232233,15.2374369 17.5303301,15.5303301 C17.2640635,15.7965966 16.8473998,15.8208027 16.5537883,15.6029482 L16.4696699,15.5303301 L14.000116,13.061 L11.5303301,15.5303301 C11.2374369,15.8232233 10.7625631,15.8232233 10.4696699,15.5303301 C10.2034034,15.2640635 10.1791973,14.8473998 10.3970518,14.5537883 L10.4696699,14.4696699 L12.939116,12 L10.4696699,9.53033009 C10.1767767,9.23743687 10.1767767,8.76256313 10.4696699,8.46966991 C10.7359365,8.20340335 11.1526002,8.1791973 11.4462117,8.39705176 Z"></path></svg>`,
  LANGUAGE: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075.475.975 1.125 1.875Zm-2.6-.4q-.45-.825-.787-1.713Q8.275 16.95 8.05 16H5.1q.725 1.25 1.812 2.175Q8 19.1 9.4 19.55Zm5.2 0q1.4-.45 2.487-1.375Q18.175 17.25 18.9 16h-2.95q-.225.95-.562 1.837-.338.888-.788 1.713ZM4.25 14h3.4q-.075-.5-.113-.988Q7.5 12.525 7.5 12t.037-1.012q.038-.488.113-.988h-3.4q-.125.5-.188.988Q4 11.475 4 12t.062 1.012q.063.488.188.988Zm5.4 0h4.7q.075-.5.113-.988.037-.487.037-1.012t-.037-1.012q-.038-.488-.113-.988h-4.7q-.075.5-.112.988Q9.5 11.475 9.5 12t.038 1.012q.037.488.112.988Zm6.7 0h3.4q.125-.5.188-.988Q20 12.525 20 12t-.062-1.012q-.063-.488-.188-.988h-3.4q.075.5.112.988.038.487.038 1.012t-.038 1.012q-.037.488-.112.988Zm-.4-6h2.95q-.725-1.25-1.813-2.175Q16 4.9 14.6 4.45q.45.825.788 1.712.337.888.562 1.838ZM10.1 8h3.8q-.3-1.1-.775-2.075Q12.65 4.95 12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838.337-.887.787-1.712Q8 4.9 6.912 5.825 5.825 6.75 5.1 8Z"/></svg>`,
  SPACE: ` `,
  TAB: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path d="m12 18-1.425-1.4 3.6-3.6H2v-2h12.175L10.6 7.4 12 6l6 6Zm8 0V6h2v12Z"/></svg>`,
};
