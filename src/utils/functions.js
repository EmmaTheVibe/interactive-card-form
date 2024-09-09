function splitNo(input) {
  return input
    ?.replace(/\s+/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

const checkMonth = (data) => {
  if (Number(data) > 12) {
    return false;
  } else {
    return true;
  }
};

const checkYear = (data) => {
  if (Number(data) < 1) {
    return false;
  } else {
    return true;
  }
};

const checkVal = (data) => {
  if (Number(data) > 0) {
    return true;
  } else {
    return false;
  }
};

const checkNoLength = (data) => {
  if (data.length < 19) {
    return false;
  } else {
    return true;
  }
};

const checkDateLength = (data) => {
  if (data.length < 2) {
    return false;
  } else {
    return true;
  }
};

const checkCvcLength = (data) => {
  if (data.length < 3) {
    return false;
  } else {
    return true;
  }
};

export {
  splitNo,
  checkCvcLength,
  checkMonth,
  checkDateLength,
  checkNoLength,
  checkVal,
  checkYear,
};
