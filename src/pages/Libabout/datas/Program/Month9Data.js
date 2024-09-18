import React from "react";
import "../../../../assets/css/sass/programDate.scss";
import rIcon from "../../../../assets/icons/rIcon.svg";
import r2Icon from "../../../../assets/icons/r2Icon.svg";
import eIcon from "../../../../assets/icons/eIcon.svg";
import mIcon from "../../../../assets/icons/mIcon.svg";
import cIcon from "../../../../assets/icons/cIcon.svg";

function Month9Data({ children }) {
  console.log(children);

  return (
    <table className="programTable">
      <tbody>
        {children?.map((item, idx) => {
          return (
            <tr key={idx} className="line">
              <td className="left">
                <div className="leftWrap">
                  <div className="contentBox date">{item.date}</div>
                </div>
              </td>
              <td className="right">
                <div className="rightWrap">
                  {item.program?.map((item, idx) => {
                    return (
                      <>
                        <div className="contentBox text">
                          <img
                            src={
                              item.icon === 1
                                ? rIcon
                                : item.icon === 2
                                ? r2Icon
                                : item.icon === 3
                                ? eIcon
                                : item.icon === 4
                                ? mIcon
                                : item.icon === 5
                                ? cIcon
                                : ""
                            }
                            alt=""
                          />
                          <div>{item.content}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Month9Data;
