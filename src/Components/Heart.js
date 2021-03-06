import React from 'react';

export default function Heart(props) {
  const iconStyle = {
    color: '#f11',
    animationName: 'pulse',
    animationDuration: `${ props.beat || 0 }s`,
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  };

  const divStyle  = {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  };

  const pulseAnimation = "@keyframes pulse { 0% { transform: scale(1); } 100% { transform: scale(1.2); } }";

  return (
    <div>
      <style type="text/css">{ pulseAnimation }</style>
      <div className='heart' style={ divStyle }>
        <span style={ iconStyle }>
          <svg width="100%" height="100%" viewBox="0 0 16 16"><path d="m417.59 527.35c-.653-.644-1.555-.965-2.707-.965-.319 0-.644.056-.976.167-.332.112-.64.262-.926.452-.285.189-.531.367-.737.533-.206.166-.401.343-.586.529-.185-.187-.381-.363-.586-.529-.206-.166-.451-.344-.737-.533-.285-.189-.594-.34-.926-.452-.332-.112-.657-.167-.976-.167-1.152 0-2.054.322-2.707.965-.653.644-.98 1.536-.98 2.678 0 .348.06.706.181 1.074.121.369.258.683.413.942.154.259.329.513.524.759.195.247.338.416.428.51.09.093.161.161.212.202l4.813 4.687c.093.094.206.14.339.14.134 0 .247-.047.339-.14l4.805-4.672c1.178-1.189 1.766-2.356 1.766-3.504 0-1.142-.327-2.035-.98-2.678" fill="#f11" transform="translate(-403.7-524.37)"/></svg>
        </span>
      </div>
    </div>
  );
}
