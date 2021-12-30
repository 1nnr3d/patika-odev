import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';
import App from './App';

describe('Emoji App Test', () => {
  let emojiList, emojiFilterInput, emoji;

  test("Header rendering test..", () => {
    render(<Header />);
    expect(screen.getByText("Emoji Search")).toBeTruthy();
  });

  test("Emoji list rendering test..", () => {
    const { container } = render(<App />);
    emojiList = container.firstChild.lastChild;
    expect(emojiList.className).toBe("component-emoji-results");
  });

  test("Emoji list filtering test..", () => {
    const { container } = render(<App />);
    emojiFilterInput = container.querySelector("input");
    emojiList = container.firstChild.lastChild;
    userEvent.type(emojiFilterInput, "Smiley");
    expect(emojiList.firstChild.querySelector("span").innerHTML).toBe("Smiley");
  });

  test("Copy emoji test..", () => { });
});