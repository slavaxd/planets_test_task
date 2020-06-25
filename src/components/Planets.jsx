import React from 'react'

function Planets({ dataAPI, handleClickPlanet, active }){
  return (
    <>
      {dataAPI.map((item) => {
        return (
          <div
            className={`content_grid-item ${item.id ===active ? 'active' : ''}`}
            key={item.id}
            onClick={() => handleClickPlanet(item.id, item.description)}
          >
            <div className="name">{item.name}</div>
            <div className="info">
              <div>
                <b>Distance from sun:</b> {item.distanceFromSun.value}{" "}
                {item.equatorialRadius.unit}
              </div>
              <div>
                <b>Length of year:</b> {item.lengthOfYear.value}{" "}
                {item.lengthOfYear.unit}
              </div>
              <div>
                <b>Moons: </b>
                ({item.moons.count}){' '}
                {item.moons.list.length > 0 && (
                  item.moons.list.map((moonName, id) => {
                    return (
                      <span key={moonName}>
                        {id ? ", " : ""}
                        {moonName}
                      </span>
                    );
                  })
                )}
              </div>
              <div>
                <b>Equatorial radius:</b> {item.equatorialRadius.value}{" "}
                {item.equatorialRadius.unit}
              </div>
              <div>
                <b>Surface gravity:</b> {item.surfaceGravity.value}{" "}
                {item.surfaceGravity.unit}
              </div>
              {item.atmosphericConstituents.list.length > 0 && (
                <div>
                  <b>Atmospheric constituents:</b>{" "}
                  {item.atmosphericConstituents.list.map(
                    (constituent, id) => {
                      return (
                        <span key={constituent}>
                          {id ? ", " : ""}
                          {constituent}
                        </span>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  )
}

export default Planets