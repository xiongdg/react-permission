import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Permission } from '../src';
import Provider from '../src/provider';
import useAuth from '../src/hook/useAuth';

describe('Permission without Provider and with permissions [1,2,3,4,5]', () => {
  let container;
  const permissions = [1, 2, 3, 4, 5];

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('Component with permission 1 will render', () => {
    let Component = () => (
      <Permission permissions={permissions}>
        <h1 permission={6}>2</h1>
        <h1 permission={1}>1</h1>
      </Permission>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].innerHTML).toEqual('1');
  });
  it('Component with permission 2 will render', () => {
    let Component = () => (
      <Permission permissions={permissions}>
        <h1 permission={6}>2</h1>
        <h1 permission={2}>-2</h1>
      </Permission>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].innerHTML).toEqual('-2');
  });
  it('Component with permission 3 will render', () => {
    let Component = () => (
      <Permission permissions={permissions}>
        <h1 permission={6}>2</h1>
        <h1 permission={3}>3</h1>
      </Permission>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].innerHTML).toEqual('3');
  });
  it('Component with permission 4 will render', () => {
    let Component = () => (
      <Permission permissions={permissions}>
        <h1 permission={6}>2</h1>
        <h1 permission={4}>4</h1>
      </Permission>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].innerHTML).toEqual('4');
  });
  it('Component with permission 5 will render', () => {
    let Component = () => (
      <Permission permissions={permissions}>
        <h1 permission={6}>2</h1>
        <h1 permission={5}>5</h1>
      </Permission>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].innerHTML).toEqual('5');
  });
});

describe('Permission with Provider and with permissions [1,2,3,4,5]', () => {
  let container,
    permissions = [1, 2, 3, 4, 5];

  const MockComponent = () => <h1>mock component</h1>;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Component with permission 1 will render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 permission={1}>1</h1>
          <MockComponent permission={6} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s[0].innerHTML).toEqual('1');
  });

  it('Component with permission 2 will render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 permission={2}>2</h1>
          <MockComponent permission={6} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s[0].innerHTML).toEqual('2');
  });

  it('Component with permission 3 will render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 permission={3}>3</h1>
          <MockComponent permission={6} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s[0].innerHTML).toEqual('3');
  });

  it('Component with permission 4 will render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 permission={4}>4</h1>
          <MockComponent permission={6} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s[0].innerHTML).toEqual('4');
  });

  it('Component with permission 5 will render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 permission={5}>5</h1>
          <MockComponent permission={6} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s[0].innerHTML).toEqual('5');
  });

  it('No component will be render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 permission={6}>1</h1>
          <h1 permission={7}>2</h1>
          <h1 permission={8}>3</h1>
          <h1 permission={9}>4</h1>
          <h1 permission={10}>5</h1>
          <MockComponent permission={6} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toEqual(0);
  });

  it('Component with permission 1 and 5 will be render', () => {
    let Component = () => (
      <Provider permissions={permissions}>
        <Permission>
          <h1 data-permission={1}>1</h1>
          <h1 data-permission={6}>2</h1>
          <h1 data-permission={7}>3</h1>
          <h1 data-permission={8}>4</h1>
          <MockComponent permission={5} />
        </Permission>
      </Provider>
    );
    ReactTestUtils.act(() => {
      ReactDOM.render(<Component />, container);
    });
    const h1s = document.body.querySelectorAll('h1');
    expect(h1s[0].innerHTML).toEqual('1');
    expect(h1s[1].innerHTML).toEqual('mock component');
  });
});

describe('UseAuth with Provider with permissions, [1,2,3,4,5]', () => {
  let permissions = [1, 2, 3, 4, 5],
    container;

  function ComponentUseAuth2() {
    const isAuth = useAuth(2);

    return isAuth && <h1>2</h1>;
  }

  function ComponentUseAuth6() {
    const isAuth = useAuth(6);

    return isAuth && <h1>2</h1>;
  }

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render Component with permission 2', () => {
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <Provider permissions={permissions}>
          <div>
            <ComponentUseAuth2 />
          </div>
        </Provider>,
        container
      );
    });

    const h1s = document.body.querySelectorAll('h1');

    expect(h1s[0].innerHTML).toEqual('2');
  });

  it('No component will be render', () => {
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <Provider permissions={permissions}>
          <div>
            <ComponentUseAuth6 />
          </div>
        </Provider>,
        container
      );
    });

    const h1s = document.body.querySelectorAll('h1');

    expect(h1s.length).toEqual(0);
  });
});

describe('filterChildrenElementByPermission should return the correct children', () => {
  let permissions = [1, 2, 3, 4, 5],
    container;

  function ComponentUseAuth2() {
    const isAuth = useAuth(2);

    return isAuth && <h1>2</h1>;
  }

  function ComponentWithPermission7() {
    return <h1>7</h1>;
  }

  function FallbackComponent() {
    return <h1>fallback</h1>;
  }

  function Root({ fallback }) {
    return (
      <Provider permissions={permissions} fallback={fallback}>
        <Permission>
          <ComponentUseAuth2 />
          <ComponentWithPermission7 permission={7} />
        </Permission>
      </Provider>
    );
  }

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render ComponentUseAuth2', () => {
    ReactTestUtils.act(() => {
      ReactDOM.render(<Root />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toEqual(1);
    expect(h1s[0].innerHTML).toEqual('2');
  });

  it('should render a fallback Component', () => {
    ReactTestUtils.act(() => {
      ReactDOM.render(<Root fallback={<FallbackComponent />} />, container);
    });

    const h1s = document.body.querySelectorAll('h1');
    expect(h1s.length).toEqual(2);
    expect(h1s[1].innerHTML).toEqual('fallback');
  });
});
