import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import {
  memo,
  createContext,
  useContext,
  useState,
  useEffect,
} from "@wordpress/element";
import { CTHFBlockControls } from "./components/InspectorControls.js";
import { handleTimeFormat, isBusinessOpen, formatTime } from "./utils.js";
import { renderBlockStyles } from "./style.js";

export const CTHFBlockContext = createContext(null);

const BusinessHours = memo(() => {
  const { blockID, attributes } = useContext(CTHFBlockContext);

  const [businessStatus, setBusinessStatus] = useState("closed");
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const weekdayNames = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
      const todayKey = weekdayNames[now.getDay()];
      const todayConfig = attributes.weekdays.find(
        (day) => day.key === todayKey
      );

      if (!todayConfig || !todayConfig.opened) {
        setBusinessStatus("closed");
        return;
      }

      const { timeDiff } = attributes.notification;
      const diffMs =
        (parseInt(timeDiff.hours, 10) * 60 + parseInt(timeDiff.minutes, 10)) *
        60 *
        1000;

      const openTime = new Date(now);
      openTime.setHours(
        parseInt(todayConfig.openTime.hours, 10),
        parseInt(todayConfig.openTime.minutes, 10),
        0,
        0
      );

      const closeTime = new Date(now);
      closeTime.setHours(
        parseInt(todayConfig.closeTime.hours, 10),
        parseInt(todayConfig.closeTime.minutes, 10),
        0,
        0
      );

      const untilOpen = openTime - now;
      const untilClose = closeTime - now;

      if (untilOpen > 0 && untilOpen <= diffMs) {
        setBusinessStatus("openingSoon");
        setRemainingTime(untilOpen);
      } else if (untilClose > 0 && untilClose <= diffMs) {
        setBusinessStatus("closingSoon");
        setRemainingTime(untilClose);
      } else if (now >= openTime && now < closeTime) {
        setBusinessStatus("open");
        setRemainingTime(null);
      } else {
        setBusinessStatus("closed");
        setRemainingTime(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [attributes.notification, attributes.weekdays]);

  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-GB", {
    hour12: attributes.timeFormat,
    timeZone: localTimezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: renderBlockStyles(blockID, attributes),
        }}
      />

      <style>
        {attributes.itemStyles.font.family != "" &&
          attributes.itemStyles.font.family != undefined && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${attributes.itemStyles.font.family}:wght@100;200;300;400;500;600;700;800;900`}
            />
          )}
        {attributes.itemStyles.labelTypography.font.family != "" &&
          attributes.itemStyles.labelTypography.font.family != undefined && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${attributes.itemStyles.labelTypography.font.family}:wght@100;200;300;400;500;600;700;800;900`}
            />
          )}
        {attributes.notification.font.family != "" &&
          attributes.notification.font.family != undefined && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${attributes.notification.font.family}:wght@100;200;300;400;500;600;700;800;900`}
            />
          )}
        {attributes.notification.timerTypography.font.family != "" &&
          attributes.notification.timerTypography.font.family != undefined && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${attributes.notification.timerTypography.font.family}:wght@100;200;300;400;500;600;700;800;900`}
            />
          )}
        {attributes.timezone.font.family != "" &&
          attributes.timezone.font.family != undefined && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${attributes.timezone.font.family}:wght@100;200;300;400;500;600;700;800;900`}
            />
          )}
        {attributes.timezone.labelTypography.font.family != "" &&
          attributes.timezone.labelTypography.font.family != undefined && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${attributes.timezone.labelTypography.font.family}:wght@100;200;300;400;500;600;700;800;900`}
            />
          )}
      </style>

      <div id={blockID} className="cthf-block__business-hours">
        <ul className="business-hours__wrap">
          {attributes.scheduling.type === "default" &&
            attributes.weekdays.map((item, _i) => {
              let label = item.key;

              if (
                attributes.scheduling.abbr &&
                attributes.scheduling.customAbbr
              ) {
                label = String(item.key).slice(
                  0,
                  attributes.scheduling?.abbrLength
                );
              } else if (attributes.scheduling.abbr) {
                label = String(item.key).slice(0, 3);
              }

              /* Capitalize the first letter */
              label = String(label);

              label = label.charAt(0).toUpperCase() + label.slice(1);

              return (
                <>
                  <li className="business-hour__item" key={item?.key}>
                    <span className="weekday">{label}</span>
                    {item.opened && (
                      <>
                        {!item.alwaysOpen && (
                          <div className="active-hours">
                            <span className="opening-hour">
                              {String(
                                handleTimeFormat(
                                  item.openTime?.hours,
                                  item.openTime?.minutes,
                                  attributes.timeFormat
                                )
                              ).trim()}
                            </span>
                            <span className="time-separator">
                              {" " +
                                String(attributes.timeSeparator).trim() +
                                " "}
                            </span>
                            <span className="closing-hour">
                              {String(
                                handleTimeFormat(
                                  item.closeTime?.hours,
                                  item.closeTime?.minutes,
                                  attributes.timeFormat
                                )
                              ).trim()}
                            </span>
                          </div>
                        )}

                        {item.alwaysOpen && (
                          <>
                            <div className="always-open">
                              {String(attributes.timeSeparator).trim() +
                                " " +
                                item.alwaysOpenLabel}
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {!item.opened && (
                      <>
                        <span className="closed-label">
                          {String(attributes.timeSeparator).trim() +
                            " " +
                            __("Closed", "rootblox")}
                        </span>
                      </>
                    )}
                  </li>
                </>
              );
            })}

          {attributes.scheduling.type === "group" &&
            attributes.groupedWeekdays.map((item, _i) => {
              let startLabel = item.start;
              let endLabel = item.end;

              if (
                attributes.scheduling.abbr &&
                attributes.scheduling.customAbbr
              ) {
                startLabel = String(item.start).slice(
                  0,
                  attributes.scheduling?.abbrLength
                );
                endLabel = String(item.end).slice(
                  0,
                  attributes.scheduling?.abbrLength
                );
              } else if (attributes.scheduling.abbr) {
                startLabel = String(item.start).slice(0, 3);
                endLabel = String(item.end).slice(0, 3);
              }

              /* Capitalize the first letter */
              startLabel = String(startLabel);
              endLabel = String(endLabel);

              startLabel =
                startLabel.charAt(0).toUpperCase() + startLabel.slice(1);
              endLabel = endLabel.charAt(0).toUpperCase() + endLabel.slice(1);

              return (
                <>
                  <li className="business-hour__item">
                    <span className="weekday">
                      {String(startLabel).trim() +
                        " " +
                        String(attributes.groupSeparator).trim() +
                        " " +
                        String(endLabel).trim()}
                    </span>

                    {item.opened && (
                      <>
                        {!item.alwaysOpen && (
                          <div className="active-hours">
                            <span className="opening-hour">
                              {String(
                                handleTimeFormat(
                                  item.openTime?.hours,
                                  item.openTime?.minutes,
                                  attributes.timeFormat
                                )
                              ).trim()}
                            </span>
                            <span className="time-separator">
                              {" " +
                                String(attributes.timeSeparator).trim() +
                                " "}
                            </span>
                            <span className="closing-hour">
                              {String(
                                handleTimeFormat(
                                  item.closeTime?.hours,
                                  item.closeTime?.minutes,
                                  attributes.timeFormat
                                )
                              ).trim()}
                            </span>
                          </div>
                        )}

                        {item.alwaysOpen && (
                          <>
                            <div className="always-open">
                              {String(attributes.timeSeparator).trim() +
                                " " +
                                item.alwaysOpenLabel}
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {!item.opened && (
                      <>
                        <span className="closed-label">
                          {String(attributes.timeSeparator).trim() +
                            " " +
                            __("Closed", "rootblox")}
                        </span>
                      </>
                    )}
                  </li>
                </>
              );
            })}
        </ul>

        {attributes.notification.enabled && (
          <div className="notification">
            {!attributes.notification.addTimer && (
              <div className="message">
                {isBusinessOpen(attributes.weekdays) &&
                  attributes.notification.open}

                {!isBusinessOpen(attributes.weekdays) &&
                  attributes.notification.close}
              </div>
            )}

            {attributes.notification.addTimer && (
              <>
                {businessStatus === "openingSoon" && (
                  <>
                    <div className="message">
                      {attributes.notification.nearingOpen}
                    </div>
                    {remainingTime !== null && (
                      <div className="timer">
                        {" "}
                        (
                        {formatTime(
                          remainingTime,
                          attributes.notification.timerLabel
                        )}
                        )
                      </div>
                    )}
                  </>
                )}

                {businessStatus === "closingSoon" && (
                  <>
                    <div className="message">
                      {attributes.notification.nearingClose}
                    </div>
                    {remainingTime !== null && (
                      <div className="timer">
                        {" "}
                        (
                        {formatTime(
                          remainingTime,
                          attributes.notification.timerLabel
                        )}
                        )
                      </div>
                    )}
                  </>
                )}

                {businessStatus === "open" && (
                  <div className="message">{attributes.notification.open}</div>
                )}
                {businessStatus === "closed" && (
                  <div className="message">{attributes.notification.close}</div>
                )}
              </>
            )}
          </div>
        )}

        {attributes.timezone.enableNotice && (
          <>
            <div className="timezone__warning">
              <div className="warning__message">
                {attributes.timezone.message}
              </div>

              {attributes.timezone.enableTime && (
                <>
                  <div className="time__wrap">
                    <div className="label">
                      {__("Current Time in ", "rootblox") + localTimezone}
                    </div>
                    <div className="time">{timeString}</div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
});

export default function Edit({ attributes, setAttributes, clientId }) {
  if (attributes.cover) {
    return <img src={attributes.cover} />;
  }

  attributes.clientId = clientId;

  const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

  const blockProps = useBlockProps({
    className: "cthf-block__wrapper",
  });

  return (
    <>
      <CTHFBlockContext.Provider
        value={{
          blockID,
          attributes,
          setAttributes,
        }}
      >
        <div {...blockProps}>
          <BusinessHours />
        </div>

        <CTHFBlockControls />
      </CTHFBlockContext.Provider>
    </>
  );
}
