import React from "react";

function BaseCard(props) {
    const arr=["⊛ Organizing World Class Sports Activities that attracts Sports Enthusiasts ⊛ Develops engaging content over Social Media (we are one ofthe most active socialmedia page)","⊛ Training Camps & Activities","⊛ Collaborate with organization within India and across the globe to deliver world class sports & Adventure Tourism","⊛ Aim to develop Eco-Friendly Infrastructure across Nation with active involvement from the local community."];
    return (
      <div style={{ padding: 24 }}>
        <h2 style={{ marginBottom: 6 }}>Section Title</h2>
        <div
          style={{
            overflow: "hidden",
            margin: "0 -24px 12px"
          }}
        >
          <div
            style={{
              whiteSpace: props.stack ? "normal" : "nowrap",
              overflowX: "scroll",
              paddingRight: 24 - props.spacing,
              paddingLeft: 24 - props.spacing,
              marginBottom: -15
            }}
          >
            {Array(4)
              .fill(1)
              .map((_, i) => {
                return (
                  <div
                    style={{
                      width: `${100 / props.visible}%`,
                      display: "inline-block",
                      position: "relative",
                      paddingBottom: props.stack ? 12 : 0
                    }}
                    key={i}
                  >
                    <div
                      style={{
                        paddingRight: props.spacing,
                        paddingLeft: props.spacing,
                        height: "100%",
                        width: "100%"
                      }}
                    >
                      <div
                        style={{
                          paddingTop: `${100 * props.ratio}%`,
                          position: "relative"
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                          }}
                          children={props.children}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  export default BaseCard;