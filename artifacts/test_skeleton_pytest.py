"""Auto-generated tests."""
import pytest
import test_runner

@pytest.mark.parametrize(
    ['section', 'tid', 'desc', 'ok', 'detail'],
    [(None, None, None, None, None)],
)
def test_check(section, tid, desc, ok, detail):
    result = test_runner.check(section, tid, desc, ok, detail)
    assert result is not None

@pytest.mark.parametrize(
    ['title'],
    [(None,)],
)
def test_print_header(title):
    result = test_runner.print_header(title)
    assert result is not None

@pytest.mark.parametrize(
    ['url'],
    [(None,)],
)
def test_run_tests(url):
    result = test_runner.run_tests(url)
    assert result is not None

@pytest.mark.parametrize(
    ['msg'],
    [(None,)],
)
def test_on_console(msg):
    result = test_runner.on_console(msg)
    assert result is not None

